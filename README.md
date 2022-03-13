# AngularTestingExamples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io) and Jasmine.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

**Common Testing:**

1. The **'describe**` function:
   A container for unit tests which also called a "test suite".
1. The **'it'** function:
   Specific an unit test for defined specification to be test.
1. The **'pending'** function:
   Indicates to jasmine that this test is not yet ready to execute.
1. The **'fail'** function:
   Simulate a failing unit test.
1. The **'xdescribe'** function:
   Same as 'describe' but in **pending** mode – mark all unit tests as pending. 
1. The **'xit'** function:
   Same as 'it' but in **pending** mode – mark this unit test as pending.
1. The **'fdescribe'** function:
   Same as 'describe' but in focus mode – ignore all test suites and unit tests which non-focused.
1. The **'fit'** function:
   Same as 'it' but in focus mode – ignore all test suites and unit tests which non-focused.
1. The **'expect'** function:
   Create an expectation for an unit test.
   1. expect(result).**toBe**(4);
   1. expect(logger.log).**toHaveBeenCalledTimes**(1);
1. The **'jasmine.createSpyObj'** function:
   Spy (mock) an object and his functions.
1. The **'spyOn'** function:
   Replace an existing function with new one and also monitoring this function.
1. The **'beforeEach'** function:
   Runs before each unit test ('it' function) – using for common initialization.
1. The **'afterEach'** function:
   Run after each unit test ('it' function) = using for common code to be execute after the unit test is done.
1. The **'ng test [--no-watch]'** command:
   Runs all application's test suites.

**API Testing:**

1. **'HttpClientTestingModule'** – Provider for to mocking HttpClient.
1. **'HttpTestingController'** – Supply an expectation functions for testing API's behavior.
   1. **'expectOne('api/path')'** – expect that was made only one request to the given URL parameter.
   1. **'verify'** – Prevents from the request is NOT a real one.

**Component Testing:**

1. When calling 'TestBed.configureTestingModule' **import the module** of the component.
1. **'const fixture = TestBed.createComponent(MyComponent)'** to create fixture.
1. Then, **'const component = fixture.componentInstance;'** to get the instance of the component.
1. After component's property change – call **'fixture.detectChanges();'**.
1. Example of querying DOM elements: **'fixture.debugElement.queryAll(By.css('.card));'**.


