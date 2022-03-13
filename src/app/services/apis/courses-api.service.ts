import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IApiResponse, ILesson, ICourse } from './apis-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {

  constructor(private http: HttpClient) {

  }

  public getCourseById(courseId: number) {
    const url: string = `/api/courses/${courseId}`;
    return this.http.get<IApiResponse<ICourse>>(url).pipe(
      map(response => response.data)
    );
  }

  public getLessons(courseId: number, searchText: string = '', sortOrder: 'asc' | 'desc' = 'asc',
    pageNumber: number = 0, pageSize: number = 3) {
    const url: string = `/api/lessons`;
    
    const httpParams = new HttpParams()
      .set("courseId", courseId)
      .set("searchText", searchText)
      .set("sortOrder", sortOrder)
      .set("pageNumber", pageNumber)
      .set("pageSize", pageSize);

    return this.http.get<IApiResponse<ILesson[]>>(url, { params: httpParams })
      .pipe(
        map(response => response.data)
      );
  }

  public getAllCourses() {
    const url: string = "/api/courses";
    return this.http.get<IApiResponse<ICourse[]>>(url).pipe(
      map(response => response.data)
    );
  }

  public saveCourse(courseId: number, courseChanges: Partial<ICourse>) {
    const url: string = `/api/courses/${courseId}`;
    return this.http.put<IApiResponse<ICourse>>(url, courseChanges).pipe(
      map(response => response.data)
    );;
  }

}

