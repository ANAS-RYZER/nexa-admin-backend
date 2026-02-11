import { ApiErrorParams } from "./global";
declare class ApiError extends Error {
    statusCode: number;
    isOperational: boolean;
    constructor({ statusCode, message, isOperational, stack }: ApiErrorParams);
}
export default ApiError;
