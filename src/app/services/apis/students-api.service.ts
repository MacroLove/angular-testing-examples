import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IApiResponse, IStudent } from './apis-interfaces';

@Injectable({
  providedIn: 'root'
})
export class StudentsApiService {

  constructor(private http: HttpClient) {

  }

  public getStudentById(studentId: number) {
    const url: string = `/api/students/${studentId}`;
    return this.http.get<IApiResponse<IStudent>>(url).pipe(
      map(response => response.data)
    );
  }
  
  public getAllStudents() {
    const url: string = "/api/students";
    return this.http.get<IApiResponse<IStudent[]>>(url).pipe(
      map(response => response.data)
    );
  }

  public saveStudent(studentId: number, studentChanges: Partial<IStudent>) {
    const url: string = `/api/students/${studentId}`;
    return this.http.put<IApiResponse<IStudent>>(url, studentChanges).pipe(
      map(response => response.data)
    );;
  }
}

