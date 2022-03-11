import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StudentsApiService } from './students-api.service';
import { STUDENTS } from 'src/testing/apis-mocks';

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
});
