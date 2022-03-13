import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { HomeModule } from 'src/app/pages/home/home.module';
import { CoursesApiService } from 'src/app/services/apis/courses-api.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let courseApiServiceSpy: jasmine.SpyObj<CoursesApiService>;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    courseApiServiceSpy = jasmine.createSpyObj(CoursesApiService, ['getAllCourses']);
    courseApiServiceSpy.getAllCourses.and.returnValue(of([]));
    
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
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
