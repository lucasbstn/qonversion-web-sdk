import { UserDataStorage } from './types';
import { LocalStorage } from '../common';
export declare class UserDataStorageImpl implements UserDataStorage {
    private readonly localStorage;
    private originalId;
    private identityId;
    constructor(localStorage: LocalStorage);
    getIdentityUserId(): string | undefined;
    getOriginalUserId(): string | undefined;
    requireOriginalUserId(): string;
    clearIdentityUserId(): void;
    setIdentityUserId(identityUserId: string): void;
    setOriginalUserId(originalUserId: string): void;
}
