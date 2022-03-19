export interface IApiResponse<TData = any> {
    data: TData;
}

export interface ICourse {
    id?: number;
    name: string;
    description: string;
    imageName: string;
    isAdvanced: boolean;
}

export interface ILesson {
    id?: number;
    description?: string;
    courseId?: number;
}