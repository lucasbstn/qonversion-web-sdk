import { IdentityService } from './types';
import { ApiInteractor, RequestConfigurator } from '../network';
export declare class IdentityServiceImpl implements IdentityService {
    private readonly requestConfigurator;
    private readonly apiInteractor;
    constructor(requestConfigurator: RequestConfigurator, apiInteractor: ApiInteractor);
    createIdentity(qonversionId: string, identityId: string): Promise<string>;
    obtainIdentity(identityId: string): Promise<string>;
}
