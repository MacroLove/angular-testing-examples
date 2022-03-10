import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';

import { MathService } from './math.service';

describe('MathService', () => {
  let loggerSpy: jasmine.SpyObj<LoggerService>;
  let service: MathService;


  beforeEach(() => {
    // Mock the logger service:
    loggerSpy = jasmine.createSpyObj(LoggerService, ['log']);

    TestBed.configureTestingModule({
      providers: [
        MathService,
        { provide: LoggerService, useValue: loggerSpy }
      ]
    });


    service = TestBed.inject(MathService); // Note: 'TestBed.get(MathService);' is deprecated!
    // service = new MathService(loggerSpy); // Another way to create instance of the MathService
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should divide two numbers', () => {
    // fail(); // Simulate a failing test case
    pending(); // Indicates to jasmine that this test is not yet ready to execute

    // spyOn(loggerSpy, 'extraFunction');
    // loggerSpy.extraFunction.and.returnValue(value);
  });


  it('should sum two numbers', () => {
    const result: number = service.sum(2, 2);

    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });


  it('should substract two numbers', () => {
    const result: number = service.subtract(2, 2);
    expect(result).toBe(0);
  });
});
