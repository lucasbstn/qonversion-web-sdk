import { LocalStorage } from './types';
export declare class LocalStorageImpl implements LocalStorage {
    getInt(key: string): number | undefined;
    getFloat(key: string): number | undefined;
    getString(key: string): string | undefined;
    getObject<T extends Record<string, unknown>>(key: string): T | undefined;
    putObject(key: string, value: Record<string, unknown>): void;
    putNumber(key: string, value: number): void;
    putString(key: string, value: string): void;
    remove(key: string): void;
}
