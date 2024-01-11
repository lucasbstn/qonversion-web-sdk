import { UserPropertiesStorage } from './types';
import { LocalStorage } from '../common';
export declare class UserPropertiesStorageImpl implements UserPropertiesStorage {
    private readonly localStorage;
    private readonly key;
    private properties;
    constructor(localStorage: LocalStorage, key: string);
    add(properties: Record<string, string>): void;
    addOne(key: string, value: string): void;
    delete(properties: Record<string, string>): void;
    deleteOne(key: string, value: string): void;
    clear(): void;
    getProperties(): Record<string, string>;
    private saveProperties;
}
