import { UserProperties } from '../../dto/UserProperties';
export declare type UserPropertiesStorage = {
    getProperties: () => Record<string, string>;
    addOne: (key: string, value: string) => void;
    add: (properties: Record<string, string>) => void;
    deleteOne: (key: string, value: string) => void;
    delete: (properties: Record<string, string>) => void;
    clear: () => void;
};
export declare type UserPropertiesService = {
    sendProperties: (userId: string, properties: Record<string, string>) => Promise<UserPropertiesSendResponse>;
    getProperties: (userId: string) => Promise<UserPropertyData[]>;
};
export declare type UserPropertiesController = {
    setProperty: (key: string, value: string) => void;
    setProperties: (properties: Record<string, string>) => void;
    getProperties: () => Promise<UserProperties>;
};
export declare type UserPropertyData = {
    key: string;
    value: string;
};
export declare type UserPropertyError = {
    key: string;
    error: string;
};
export declare type UserPropertiesSendResponse = {
    savedProperties: UserPropertyData[];
    propertyErrors: UserPropertyError[];
};
