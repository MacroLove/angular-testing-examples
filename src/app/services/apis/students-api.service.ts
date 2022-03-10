import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudent } from './apis-interfaces';

@Injectable({
  providedIn: 'root'
})
export class StudentsApiService {

  constructor(private http: HttpClient) {

  }

  public getStudentById(studentId: string) {
    const url: string = `/api/students/${studentId}`;
    return this.http.get<IStudent>(url);
  }
  
  public getAllStudents() {
    const url: string = "/api/students";
    return this.http.get<IStudent[]>(url);
  }
}
