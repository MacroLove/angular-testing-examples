import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesModule } from 'src/app/features/courses/courses.module';
import { MOCK_COURSES } from 'src/testing/apis-mocks';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesModule, NoopAnimationsModule]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CoursesComponent);
      component = fixture.componentInstance;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the courses', () => {
    component.courses = MOCK_COURSES;
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('.card.course'));

    expect(cards).toBeTruthy();
    expect(cards.length).toBe(MOCK_COURSES.length);
  });

  it('should display the first course', () => {
    component.courses = MOCK_COURSES;
    fixture.detectChanges();

    const firstCard = fixture.debugElement.query(By.css('.card.course:first-child'));
    const cardHeader = firstCard.query(By.css('.header'));
    expect(firstCard).toBeTruthy();
    expect(cardHeader.nativeElement).toBeInstanceOf(HTMLDivElement);
    expect(cardHeader.nativeElement.textContent).toBe(component.courses[0].name);
  });
});
