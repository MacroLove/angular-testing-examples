import { IStudent } from "src/app/services/apis/apis-interfaces";

export const STUDENTS: IStudent[] = [
    {
        id: 1,
        name: 'Yossi',
        birthDate: new Date(1991, 0 , 11)
    },
    {
        id: 2,
        name: 'Ben',
        birthDate: new Date(1952, 0 , 1)
    },
    {
        id: 3,
        name: 'Ofek',
        birthDate: new Date(1983, 0 , 27)
    },
    {
        id: 4,
        name: 'Ron',
        birthDate: new Date(1978, 0 , 7)
    },
    {
        id: 5,
        name: 'Dana',
        birthDate: new Date(1998, 0 , 23)
    }
];