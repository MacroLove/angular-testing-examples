# AngularTestingExamples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io) and Jasmine.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

1. The **&#39;describe** ` function:
 A container for unit tests which also called a &quot;test suite&quot;.
2. The **&#39;it&#39;** function:
Specific an unit test for defined specification to be test.
3. The **&#39;pending&#39;** function:
 Indicates to jasmine that this test is not yet ready to execute.
4. The **&#39;fail&#39;** function:
 Simulate a failing unit test.
5. The **&#39;xdescribe&#39;** function:
 Same as &#39;describe&#39; but in **pending** mode – mark all unit tests as pending.
6. The **&#39;xit&#39;** function:
 Same as &#39;it&#39; but in **pending** mode – mark this unit test as pending.
7. The **&#39;fdescribe&#39;** function:
 Same as &#39;describe&#39; but in focus mode – ignore all test suites and unit tests which non-focused.
8. The **&#39;fit&#39;** function:
Same as &#39;it&#39; but in focus mode – ignore all test suites and unit tests which non-focused.
9. The **&#39;expect&#39;** function:
Create an expectation for an unit test.
  1. expect(result). **toBe** (4);
  2. expect(logger.log). **toHaveBeenCalledTimes** (1);
10. The **&#39;jasmine.createSpyObj&#39;** function:
Spy (mock) an object and his functions.
11. The **&#39;spyOn&#39;** function:
Replace an existing function with new one and also monitoring this function.
12. The **&#39;beforeEach&#39;** function:
 Runs before each unit test (&#39;it&#39; function) – using for common initialization.
13. The **&#39;ng test [--no-watch]&#39;** command:
Runs all application&#39;s test suites.
14. **'HttpClientTestingModule'** – Provider for to mocking HttpClient.
15. **'HttpTestingController'** – Supply an expectation functions for testing API&#39;s behavior.


