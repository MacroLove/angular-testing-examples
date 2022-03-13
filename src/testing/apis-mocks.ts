import { ILesson, ICourse } from "src/app/services/apis/apis-interfaces";

export const COURSES: ICourse[] = [
    {
        id: 1,
        name: 'Angular Testing Course',
        birthDate: new Date(1991, 0, 11)
    },
    {
        id: 2,
        name: 'Angular - The Complete Guide',
        birthDate: new Date(1952, 0, 1)
    },
    {
        id: 3,
        name: 'The modern Angular Bootcamp',
        birthDate: new Date(1983, 0, 27)
    },
    {
        id: 4,
        name: 'Angular & NodeJS',
        birthDate: new Date(1978, 0, 7)
    },
    {
        id: 5,
        name: 'Angular Forms In Depth',
        birthDate: new Date(1998, 0, 23)
    }
];

export const LESSONS: ILesson[] = [
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