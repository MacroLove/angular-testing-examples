import { ILesson, IStudent } from "src/app/services/apis/apis-interfaces";

export const STUDENTS: IStudent[] = [
    {
        id: 1,
        name: 'Yossi',
        birthDate: new Date(1991, 0, 11)
    },
    {
        id: 2,
        name: 'Ben',
        birthDate: new Date(1952, 0, 1)
    },
    {
        id: 3,
        name: 'Ofek',
        birthDate: new Date(1983, 0, 27)
    },
    {
        id: 4,
        name: 'Ron',
        birthDate: new Date(1978, 0, 7)
    },
    {
        id: 5,
        name: 'Dana',
        birthDate: new Date(1998, 0, 23)
    }
];

export const LESSONS: ILesson[] = [
    {
        id: 1,
        description: 'lesson 1',
        studentsIds: [1, 2, 3, 4, 5]
    },
    {
        id: 2,
        description: 'lesson 2',
        studentsIds: [1, 2]
    },
    {
        id: 3,
        description: 'lesson 3',
        studentsIds: [4, 5]
    },
    {
        id: 4,
        description: 'lesson 4',
        studentsIds: [3]
    },
    {
        id: 5,
        description: 'lesson 5',
        studentsIds: [3, 4]
    },
    {
        id: 6,
        description: 'lesson 6',
        studentsIds: [1, 2, 5]
    }
]