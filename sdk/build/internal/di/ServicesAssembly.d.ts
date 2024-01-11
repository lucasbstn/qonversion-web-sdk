import { NetworkAssembly, ServicesAssembly } from './types';
import { UserPropertiesService } from '../userProperties';
import { IdentityService, UserService } from '../user';
import { EntitlementsService } from '../entitlements';
import { PurchasesService } from '../purchases';
import { InternalConfig } from '../InternalConfig';
export declare class ServicesAssemblyImpl implements ServicesAssembly {
    private readonly internalConfig;
    private readonly networkAssembly;
    constructor(internalConfig: InternalConfig, networkAssembly: NetworkAssembly);
    userPropertiesService(): UserPropertiesService;
    userService(): UserService;
    userServiceDecorator(): UserService;
    identityService(): IdentityService;
    entitlementsService(): EntitlementsService;
    purchasesService(): PurchasesService;
}
