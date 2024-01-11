declare type CamelCaseKeys = <T>(value: any) => T;
export declare const camelCaseKeys: CamelCaseKeys;
declare type CamelCaseObjectKeys = <T extends Record<string, unknown>>(obj: Record<string, unknown>) => T;
export declare const camelCaseObjectKeys: CamelCaseObjectKeys;
declare type SnakeToCamelCaseConverter = (str: string) => string;
export declare const snakeToCamelCase: SnakeToCamelCaseConverter;
export {};
