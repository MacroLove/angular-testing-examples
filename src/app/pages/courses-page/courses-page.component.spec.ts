import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CoursesPageModule } from 'src/app/pages/courses-page/courses-page.module';
import { CoursesApiService } from 'src/app/services/apis/courses-api.service';
import { MOCK_COURSES } from 'src/testing/apis-mocks';

import { CoursesPageComponent } from './courses-page.component';

describe('HomeComponent', () => {
  let courseApiServiceSpy: jasmine.SpyObj<CoursesApiService>;
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    courseApiServiceSpy = jasmine.createSpyObj(CoursesApiService, ['getAllCourses']);
    courseApiServiceSpy.getAllCourses.and.returnValue(of(MOCK_COURSES));

    await TestBed.configureTestingModule({
      imports: [CoursesPageModule, NoopAnimationsModule],
      providers: [
        { provide: CoursesApiService, useValue: courseApiServiceSpy }
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoursesPageComponent);
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




  it('asynchronous test simulation 1 - DoneFn', (done: DoneFn) => {
    let asyncDone: boolean = false;
    
    // Simulate asynchronous task need to be done before tests:
    setTimeout(() => {
      asyncDone = true;
      expect(asyncDone).toBe(true);
      done();
    }, 50);
  });

  it('asynchronous test simulation 2 - fakeAsync & tick', fakeAsync(() => {
    let asyncDone: boolean = false;

    // Simulate asynchronous task need to be done before tests:
    setTimeout(() => {
      asyncDone = true;
    }, 50);

    // Simulate (immediately) an passing of 50ms:
    tick(50);

    expect(asyncDone).toBe(true);
  }));


  it('asynchronous test simulation 3 - fakeAsync & flush', fakeAsync(() => {
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

  it('asynchronous test simulation 4 - fakeAsync & flushMicrotasks (Promise)', fakeAsync(() => {
    let value: number = 0;

    // Simulate micro asynchronous task need to be done before tests:
    Promise.resolve().then(() => {
      value += 3;
    });

    // Simulate (macro) asynchronous task need to be done before tests:
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

  it('asynchronous test simulation 5 - waitForAsync', waitForAsync(() => {
    let value: number = 0;

    // Simulate micro asynchronous task need to be done before tests:
    Promise.resolve().then(() => {
      value += 3;
    });

    // Simulate (macro) asynchronous task:
    // Note: with waitForAsync it's NOT possible to test value after macro asynchronous task!
    setTimeout(() => {
      value += 1;
    }, 50);

    // fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(value).toBe(3);
    });

  }));
});
