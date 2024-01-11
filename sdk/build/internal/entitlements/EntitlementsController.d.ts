import { EntitlementsController, EntitlementsService } from './types';
import { Entitlement } from '../../dto/Entitlement';
import { UserController, UserDataStorage } from '../user';
import { Logger } from '../logger';
export declare class EntitlementsControllerImpl implements EntitlementsController {
    private readonly userController;
    private readonly entitlementsService;
    private readonly userDataStorage;
    private readonly logger;
    constructor(userController: UserController, entitlementsService: EntitlementsService, userDataStorage: UserDataStorage, logger: Logger);
    getEntitlements(): Promise<Entitlement[]>;
}
