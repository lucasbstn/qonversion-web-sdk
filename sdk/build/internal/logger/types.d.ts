export declare type LogMethod = (message: string, ...objects: unknown[]) => void;
export declare type Logger = {
    verbose: LogMethod;
    info: LogMethod;
    warn: LogMethod;
    error: LogMethod;
};
