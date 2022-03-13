import { ILesson, ICourse } from "src/app/services/apis/apis-interfaces";

export const MOCK_COURSES: ICourse[] = [
    {
        id: 1,
        name: 'Angular Testing Course'
    },
    {
        id: 2,
        name: 'Angular - The Complete Guide'
    },
    {
        id: 3,
        name: 'The modern Angular Bootcamp'
    },
    {
        id: 4,
        name: 'Angular & NodeJS'
    },
    {
        id: 5,
        name: 'Angular Forms In Depth'
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