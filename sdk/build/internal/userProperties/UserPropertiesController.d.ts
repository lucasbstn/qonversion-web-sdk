import { UserPropertiesController, UserPropertiesService, UserPropertiesStorage } from './types';
import { DelayedWorker } from '../utils/DelayedWorker';
import { Logger } from '../logger';
import { UserChangedListener, UserChangedNotifier, UserDataStorage } from '../user';
import { UserProperties } from '../../dto/UserProperties';
export declare class UserPropertiesControllerImpl implements UserPropertiesController, UserChangedListener {
    private readonly pendingUserPropertiesStorage;
    private readonly sentUserPropertiesStorage;
    private readonly userPropertiesService;
    private readonly userDataStorage;
    private readonly delayedWorker;
    private readonly logger;
    private readonly sendingDelayMs;
    constructor(pendingUserPropertiesStorage: UserPropertiesStorage, sentUserPropertiesStorage: UserPropertiesStorage, userPropertiesService: UserPropertiesService, userDataStorage: UserDataStorage, delayedWorker: DelayedWorker, logger: Logger, userChangedNotifier: UserChangedNotifier, sendingDelayMs?: number);
    setProperty(key: string, value: string): void;
    setProperties(properties: Record<string, string>): void;
    getProperties(): Promise<UserProperties>;
    onUserChanged(): void;
    private sendUserPropertiesIfNeeded;
    private sendUserProperties;
    private shouldSendProperty;
    private static isValidKey;
    private static isValidValue;
}
