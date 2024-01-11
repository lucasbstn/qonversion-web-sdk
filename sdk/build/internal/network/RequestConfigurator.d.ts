import { HeaderBuilder, NetworkRequest, RequestConfigurator } from './types';
import { PrimaryConfigProvider } from '../types';
import { UserDataProvider } from '../user';
import { PurchaseCoreData, StripeStoreData } from '../../dto/Purchase';
import { Environment } from '../../dto/Environment';
import { UserPropertyData } from '../userProperties';
export declare class RequestConfiguratorImpl implements RequestConfigurator {
    private readonly headerBuilder;
    private readonly baseUrl;
    private readonly primaryConfigProvider;
    private readonly userDataProvider;
    constructor(headerBuilder: HeaderBuilder, baseUrl: string, primaryConfigProvider: PrimaryConfigProvider, userDataProvider: UserDataProvider);
    configureUserRequest(id: string): NetworkRequest;
    configureCreateUserRequest(id: string, environment: Environment): NetworkRequest;
    configureUserPropertiesSendRequest(userId: string, properties: UserPropertyData[]): NetworkRequest;
    configureUserPropertiesGetRequest(userId: string): NetworkRequest;
    configureCreateIdentityRequest(qonversionId: string, identityId: string): NetworkRequest;
    configureIdentityRequest(identityId: string): NetworkRequest;
    configureEntitlementsRequest(userId: string): NetworkRequest;
    configureStripePurchaseRequest(userId: string, data: PurchaseCoreData & StripeStoreData): NetworkRequest;
    private configureRequest;
}
