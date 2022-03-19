import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICourse } from 'src/app/services/apis/apis-interfaces';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
  @Input() courses: ICourse[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public editCourse(course: ICourse) {

  }
}
