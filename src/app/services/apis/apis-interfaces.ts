export interface IApiResponse<TData = any> {
    data: TData;
}

export interface IStudent {
    id?: number;
    name?: string;
    birthDate?: Date;
    group?: string;
}