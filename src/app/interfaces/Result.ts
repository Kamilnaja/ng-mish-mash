import { Error } from './Error';

export interface Result {
    error?: Error;
    status?: number;
}
