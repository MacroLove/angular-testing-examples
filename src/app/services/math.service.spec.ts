import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should divide two numbers', () => {
    pending(); // Indicates to jasmine that this test is not yet ready to execute
  });

  it('should multiple two numbers', () => {
    fail(); // Simulate a failing test case
  });


});
