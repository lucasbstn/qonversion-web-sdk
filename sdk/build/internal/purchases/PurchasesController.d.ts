import { PurchasesController, PurchasesService } from './types';
import { UserDataStorage } from '../user';
import { Logger } from '../logger';
import { PurchaseCoreData, StripeStoreData, UserPurchase } from '../../dto/Purchase';
export declare class PurchasesControllerImpl implements PurchasesController {
    private readonly purchasesService;
    private readonly userDataStorage;
    private readonly logger;
    constructor(purchasesService: PurchasesService, userDataStorage: UserDataStorage, logger: Logger);
    sendStripePurchase(data: PurchaseCoreData & StripeStoreData): Promise<UserPurchase>;
}
