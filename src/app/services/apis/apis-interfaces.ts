export interface IApiResponse<TData = any> {
    data: TData;
}

export interface IStudent {
    id?: number;
    name?: string;
    birthDate?: Date;
    group?: string;
}

export interface ILesson {
    id?: number;
    description?: string;
    studentsIds?: number[];
}