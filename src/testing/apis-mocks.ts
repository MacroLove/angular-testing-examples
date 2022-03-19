import { ILesson, ICourse } from "src/app/services/apis/apis-interfaces";

export const MOCK_COURSES: ICourse[] = [
    {
        "id": 1,
        "name": "Angular Testing Masterclass (with FREE E-Book)",
        "description": "A complete guide to Angular 13 Unit Testing and End to End (E2E) Testing, including Testing best practices and CI",
        "imageName": "course_1.png",
        "isAdvanced": true
    },
    {
        "id": 2,
        "name": "Angular - The Complete Guide (2022 Edition)",
        "description": "Master Angular 13 (formerly \"Angular 2\") and build awesome, reactive web apps with the successor of Angular.js",
        "imageName": "course_2.jpg",
        "isAdvanced": true
    },
    {
        "id": 3,
        "name": "The modern Angular Bootcamp",
        "description": "Get job ready with Angular! Understand how to build, test, and deploy production-ready apps.",
        "imageName": "course_3.jpg",
        "isAdvanced": false
    },
    {
        "id": 4,
        "name": "Angular & NodeJS - The MEAN Stack Guide [2022 Edition]",
        "description": "Learn how to connect your Angular Frontend to a NodeJS & Express & MongoDB Backend by building a real Application",
        "imageName": "course_4.jpg",
        "isAdvanced": true
    },
    {
        "id": 5,
        "name": "Angular Forms In Depth",
        "description": "Build complex enterprise data forms with the powerful Angular 13 Forms module",
        "imageName": "course_5.jpg",
        "isAdvanced": false
    },
    {
        "id": 6,
        "name": "The Complete Angular Course: Beginner to Advanced",
        "description": "The most comprehensive Angular 4 (Angular 2+) course. Build a real e-commerce app with Angular, Firebase and Bootstrap 4",
        "imageName": "course_6.jpg",
        "isAdvanced": false
    }
];

export const MOCK_LESSONS: ILesson[] = [
    {
        id: 1,
        description: 'lesson 1',
        courseId: 5
    },
    {
        id: 2,
        description: 'lesson 2',
        courseId: 1
    },
    {
        id: 3,
        description: 'lesson 3',
        courseId: 5
    },
    {
        id: 4,
        description: 'lesson 4',
        courseId: 4
    },
    {
        id: 5,
        description: 'lesson 5',
        courseId: 3
    },
    {
        id: 6,
        description: 'lesson 6',
        courseId: 5
    }
]