import { ComponentFixture, TestBed } from '@angular/core/testing';
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


  it('should display only advanced courses on checkbox selected(clicked)', (/*done: DoneFn*/) => {
    const advancedCheckbox = fixture.debugElement
      .query(By.css('.only-advanced-checkbox[type="checkbox"]'));

    if (!(advancedCheckbox?.nativeElement instanceof HTMLInputElement)) {
      return fail('should have checkbox element');
    }

    advancedCheckbox.nativeElement.click();
    fixture.detectChanges();

    // The setTimeout and DoneFn are need whenever the changes doesn't appears immediately:
    // setTimeout(() => {
    const normalCoursesElement = fixture.debugElement
      .query(By.css('.normal-courses'));
    const advancedCoursesElement = fixture.debugElement
      .query(By.css('.advanced-courses'));

    expect(normalCoursesElement).toBeNull();
    expect(advancedCoursesElement).toBeTruthy();

    //   done();
    // }, 500);
  });
});
