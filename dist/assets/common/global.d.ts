import { Document, Types } from "mongoose";
export interface ITokens {
    ACCESS: string;
    REFRESH: string;
    RESET_PASSWORD: string;
    VERIFY_EMAIL: string;
}
export interface ApiErrorParams {
    statusCode: number;
    message: string;
    isOperational?: boolean;
    stack?: string;
}
export interface IPrivilege {
    _id: Types.ObjectId;
    resource: string;
    actions: string[];
}
export interface PaginatedResult<T> {
    data: T[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalCount: number;
        limit: number;
        hasNext: boolean;
        hasPrevious: boolean;
    };
}
export interface ICity extends Document {
    name: string;
    state: Types.ObjectId;
    country: Types.ObjectId;
}
export interface ICountry extends Document {
    name: string;
    code: string;
}
export interface IState extends Document {
    name: string;
    country: Types.ObjectId;
    cities: Types.ObjectId[];
}
