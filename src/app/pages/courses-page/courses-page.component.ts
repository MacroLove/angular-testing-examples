import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICourse } from 'src/app/services/apis/apis-interfaces';
import { CoursesApiService } from 'src/app/services/apis/courses-api.service';

@Component({
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public isShowAdvanced: boolean = false;
  public beginnerCourses: Observable<ICourse[]>;
  public advancedCourses: Observable<ICourse[]>;

  constructor(private coursesApi: CoursesApiService) {
    const allCourses$ = this.coursesApi.getAllCourses();

    this.beginnerCourses = allCourses$.pipe(map(courses => {
      return courses?.filter(c => !c.isAdvanced) || [];
    }));

    this.advancedCourses = allCourses$.pipe(map(courses => {
      return courses?.filter(c => c.isAdvanced) || [];
    }))
  }

  ngOnInit(): void {
  }

}
