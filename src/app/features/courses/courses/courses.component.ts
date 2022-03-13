import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICourse } from 'src/app/services/apis/apis-interfaces';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {
  @Input() courses: ICourse[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public editCourse(course: ICourse) {

  }
}
