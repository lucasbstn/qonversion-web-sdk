import { EntitlementsService } from './types';
import { Entitlement } from '../../dto/Entitlement';
import { ApiInteractor, RequestConfigurator } from '../network';
export declare class EntitlementsServiceImpl implements EntitlementsService {
    private readonly requestConfigurator;
    private readonly apiInteractor;
    constructor(requestConfigurator: RequestConfigurator, apiInteractor: ApiInteractor);
    getEntitlements(userId: string): Promise<Entitlement[]>;
}
