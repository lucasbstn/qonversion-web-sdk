import { StorageAssembly } from './types';
import { UserDataProvider, UserDataStorage } from '../user';
import { LocalStorage } from '../common';
import { UserPropertiesStorage } from '../userProperties';
export declare class StorageAssemblyImpl implements StorageAssembly {
    private sharedUserDataStorage;
    private sharedPendingUserPropertiesStorage;
    private sharedSentUserPropertiesStorage;
    localStorage(): LocalStorage;
    userDataProvider(): UserDataProvider;
    userDataStorage(): UserDataStorage;
    pendingUserPropertiesStorage(): UserPropertiesStorage;
    sentUserPropertiesStorage(): UserPropertiesStorage;
    private userPropertiesStorage;
}
