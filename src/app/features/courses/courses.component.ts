import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from 'src/app/services/apis/apis-interfaces';
import { CoursesApiService } from 'src/app/services/apis/courses-api.service';

@Component({
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  
  @Input() courses?: ICourse[];

  constructor() { }

  ngOnInit(): void {
  }

  public editCourse(course: ICourse) {

  }
}
