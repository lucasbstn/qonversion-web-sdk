declare type ResponseCodeChecker = (code: number) => boolean;
export declare const isSuccessfulResponse: ResponseCodeChecker;
export declare const isInternalServerErrorResponse: ResponseCodeChecker;
declare type Delayer = (timeMs: number) => Promise<void>;
export declare const delay: Delayer;
export {};
