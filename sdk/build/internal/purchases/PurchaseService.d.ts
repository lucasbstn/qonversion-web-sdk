import { PurchasesService } from './types';
import { PurchaseCoreData, StripeStoreData, UserPurchase } from '../../dto/Purchase';
import { ApiInteractor, RequestConfigurator } from '../network';
export declare class PurchaseServiceImpl implements PurchasesService {
    private readonly requestConfigurator;
    private readonly apiInteractor;
    constructor(requestConfigurator: RequestConfigurator, apiInteractor: ApiInteractor);
    sendStripePurchase(userId: string, data: PurchaseCoreData & StripeStoreData): Promise<UserPurchase>;
}
