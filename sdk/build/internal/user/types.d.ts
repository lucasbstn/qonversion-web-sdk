import { User } from '../../dto/User';
export declare type UserDataProvider = {
    getOriginalUserId: () => string | undefined;
    getIdentityUserId: () => string | undefined;
    requireOriginalUserId: () => string;
};
export declare type UserDataStorage = UserDataProvider & {
    setOriginalUserId: (originalUserId: string) => void;
    setIdentityUserId: (identityUserId: string) => void;
    clearIdentityUserId: () => void;
};
export declare type UserIdGenerator = {
    generate: () => string;
};
export declare type UserService = {
    getUser: (id: string) => Promise<User>;
    createUser: (id: string) => Promise<User>;
};
export declare type IdentityService = {
    createIdentity: (qonversionId: string, identityId: string) => Promise<string>;
    obtainIdentity: (identityId: string) => Promise<string>;
};
export declare type UserController = UserChangedNotifier & {
    getUser: () => Promise<User>;
    createUser: () => Promise<User>;
    identify: (identityId: string) => Promise<void>;
    logout: () => Promise<void>;
};
export declare type UserApi = {
    id: string;
    identity_id: string;
    created: number;
    environment: 'prod' | 'sandbox';
};
export declare type IdentityApi = {
    user_id: string;
};
export declare type UserChangedListener = {
    onUserChanged: (newUserOriginalId: string, oldUserOriginalId?: string, oldUserIdentityId?: string) => void;
};
export declare type UserChangedNotifier = {
    subscribeOnUserChanges: (listener: UserChangedListener) => void;
};
