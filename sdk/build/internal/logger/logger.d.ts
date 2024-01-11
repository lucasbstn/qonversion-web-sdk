import { Logger } from './types';
import { LoggerConfigProvider } from '../types';
export default class LoggerImpl implements Logger {
    private readonly loggerConfigProvider;
    constructor(loggerConfigProvider: LoggerConfigProvider);
    verbose(message: string, ...objects: unknown[]): void;
    info(message: string, ...objects: unknown[]): void;
    warn(message: string, ...objects: unknown[]): void;
    error(message: string, ...objects: unknown[]): void;
    private log;
}
