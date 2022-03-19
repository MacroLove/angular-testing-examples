import { ICourse } from "src/app/services/apis/apis-interfaces";

describe('Courses page', () => {
    let allCourses: ICourse[];

    beforeEach(() => {
        // Read courses.json from fixtures folder and set it as response's body of '/api/courses' calling:
        cy.fixture('courses.json').then((courses: ICourse[]) => {
            allCourses = courses;
            const responseBody = { data: courses };
            cy.intercept("GET", "/api/courses", { body: responseBody }).as("courses");
        });

        cy.visit('/courses');
    });

     it('Should display empty state', () => {
        cy.contains("Show Only Advanced");
        cy.contains("Beginner Courses")
        cy.contains("There is no courses to display");
        cy.get(".advanced-courses").should("not.exist");
     });

     it('should display beginners courses', () => {
        cy.wait("@courses");

        cy.contains("Beginner Courses")
        cy.get(".beginners-courses").should("exist");
        cy.get(".advanced-courses").should("not.exist");
        cy.get(".beginners-courses .course").its("length").should("be.gte", 1);
     });

     it('should display advanced courses', () => {
        cy.wait("@courses");

        cy.get('input[type="checkbox"].only-advanced-checkbox').click();
        
        cy.contains("Advanced Courses")
        cy.get(".advanced-courses").should("exist");
        cy.get(".beginners-courses").should("not.exist");
        cy.get(".advanced-courses .course").its("length").should("be.gte", 1);
     });
});
