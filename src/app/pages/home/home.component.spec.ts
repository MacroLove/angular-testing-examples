import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { HomeModule } from 'src/app/pages/home/home.module';
import { CoursesApiService } from 'src/app/services/apis/courses-api.service';
import { MOCK_COURSES } from 'src/testing/apis-mocks';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let courseApiServiceSpy: jasmine.SpyObj<CoursesApiService>;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    courseApiServiceSpy = jasmine.createSpyObj(CoursesApiService, ['getAllCourses']);
    courseApiServiceSpy.getAllCourses.and.returnValue(of(MOCK_COURSES));

    await TestBed.configureTestingModule({
      imports: [HomeModule, NoopAnimationsModule],
      providers: [
        { provide: CoursesApiService, useValue: courseApiServiceSpy }
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display only not advanced courses', () => {
    const normalCoursesElement = fixture.debugElement
      .query(By.css('.normal-courses'));
    const advancedCoursesElement = fixture.debugElement
      .query(By.css('.advanced-courses'));

    expect(normalCoursesElement).toBeTruthy();
    expect(advancedCoursesElement).toBeNull();
  });

  it('should display only advanced courses', () => {
    component.isShowAdvanced = true;
    fixture.detectChanges();

    const normalCoursesElement = fixture.debugElement
      .query(By.css('.normal-courses'));
    const advancedCoursesElement = fixture.debugElement
      .query(By.css('.advanced-courses'));

    expect(normalCoursesElement).toBeNull();
    expect(advancedCoursesElement).toBeTruthy();
  });


  it('should display only advanced courses on checkbox selected(clicked)', () => {
    const advancedCheckbox = fixture.debugElement
      .query(By.css('.only-advanced-checkbox[type="checkbox"]'));

    if (!(advancedCheckbox?.nativeElement instanceof HTMLInputElement)) {
      return fail('should have checkbox element');
    }

    // Note: This click doesn't doing any asynchronous task!
    // if it's does doing asynchronous task then we should use fakeAsync and flush (see next simulated tasts)
    advancedCheckbox.nativeElement.click();
    fixture.detectChanges();

    const normalCoursesElement = fixture.debugElement
      .query(By.css('.normal-courses'));
    const advancedCoursesElement = fixture.debugElement
      .query(By.css('.advanced-courses'));

    expect(normalCoursesElement).toBeNull();
    expect(advancedCoursesElement).toBeTruthy();
  });




  it('simulate asynchronous case test 1', (done: DoneFn) => {
    let asyncDone: boolean = false;
    
    // Simulate asynchronous task need to be done before tests:
    setTimeout(() => {
      asyncDone = true;
      expect(asyncDone).toBe(true);
      done();
    }, 50);
  });

  it('simulate asynchronous case test 2', fakeAsync(() => {
    let asyncDone: boolean = false;

    // Simulate asynchronous task need to be done before tests:
    setTimeout(() => {
      asyncDone = true;
    }, 50);

    // Simulate (immediately) an passing of 50ms:
    tick(50);

    expect(asyncDone).toBe(true);
  }));


  it('simulate asynchronous case test 3', fakeAsync(() => {
    let asyncDone: boolean = false;

    // Simulate asynchronous task need to be done before tests:
    setTimeout(() => {
      asyncDone = true;
    }, 50);

    // Simulate (immediately) the passing of all asynchronous tasks and return their simulated duration:
    const simulatedPassedMS = flush();

    expect(asyncDone).toBe(true);
    expect(simulatedPassedMS).toBeLessThanOrEqual(400);
  }));

  it('simulate asynchronous case test 4', fakeAsync(() => {
    let value: number = 0;

    // Simulate micro asynchronous task need to be done before tests:
    Promise.resolve().then(() => {
      value += 3;
    });

    // Simulate (macro) 
    setTimeout(() => {
      value += 1;
    }, 50);

    // Simulate (immediately) the passing of all asynchronous micro tasks and return their simulated duration:
    const simulatedPassedMS1 = flushMicrotasks();

    expect(value).toBe(3);

    // Simulate (immediately) the passing of all (reminded) asynchronous tasks and return their simulated duration:
    const simulatedPassedMS2 = flush();

    expect(value).toBe(4);
  }));

});
