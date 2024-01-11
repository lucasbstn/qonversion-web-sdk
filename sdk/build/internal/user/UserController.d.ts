import { IdentityService, UserChangedListener, UserController, UserDataStorage, UserIdGenerator, UserService } from './types';
import { User } from '../../dto/User';
import { Logger } from '../logger';
export declare class UserControllerImpl implements UserController {
    private readonly userService;
    private readonly identityService;
    private readonly userDataStorage;
    private readonly userIdGenerator;
    private readonly logger;
    private userChangedListeners;
    constructor(userService: UserService, identityService: IdentityService, userDataStorage: UserDataStorage, userIdGenerator: UserIdGenerator, logger: Logger);
    getUser(): Promise<User>;
    identify(identityId: string): Promise<void>;
    logout(): Promise<void>;
    createUser(): Promise<User>;
    subscribeOnUserChanges(listener: UserChangedListener): void;
    private handleSuccessfulIdentity;
    private fireUserChangedEvent;
}
