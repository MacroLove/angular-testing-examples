import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StudentsApiService } from './students-api.service';
import { STUDENTS } from 'src/testing/apis-mocks';
import { IStudent } from './apis-interfaces';

describe('StudentsApiService', () => {
  let service: StudentsApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StudentsApiService,
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(StudentsApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  afterEach(() => {
    httpTestingController.verify(); // Make sure no real request is made
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrive all students', () => {
    service.getAllStudents().subscribe(students => {
      expect(students).toBeTruthy();
      expect(students.length).toBe(5);
      const student = students.find(student => student.id === 2);
      expect(student?.name).toBe('Ben');
    });

    // Expect single request to a given url:
    const requestTest = httpTestingController.expectOne('/api/students');
    expect(requestTest.request.method).toBe("GET");

    requestTest.flush({ data: STUDENTS });
  });

  it('should retrive a student by id', () => {
    service.getStudentById(5).subscribe(student => {
      expect(student).toBeTruthy();
      expect(student.id).toBe(5);
    });

    // Expect single request to a given url:
    const requestTest = httpTestingController.expectOne('/api/students/5');
    expect(requestTest.request.method).toBe("GET");

    requestTest.flush({ data: STUDENTS.find(student => student.id === 5) });
  });

  it('should save the student data', () => {
    const studentChanges: Partial<IStudent> = { name: 'Hadar' };
    service.saveStudent(5, studentChanges).subscribe((student) => {
      expect(student.id).toBe(5);
      expect(student.name).toBe('Hadar');
    });

    const requestTest = httpTestingController.expectOne('/api/students/5');
    expect(requestTest.request.method).toBe('PUT');
    expect(requestTest.request.body.name).toBe('Hadar');

    const student = STUDENTS.find(student => student.id);
    requestTest.flush({ ...student, ...studentChanges });
  });

  it('should give an error if save student data failed', () => {
    const studentChanges: Partial<IStudent> = { name: 'Hadar' };
    service.saveStudent(5, studentChanges).subscribe({
      next: (student: IStudent) => {
        fail('The save student should have an error');
      },
      error: (error: HttpErrorResponse) => {
        expect(error.status).toBe(500);
      }
    });

    const requestTest = httpTestingController.expectOne('/api/students/5');
    expect(requestTest.request.method).toBe('PUT');
    requestTest.flush('save student failed', { status: 500, statusText: 'Internal server error' });
  });
});
