import { RetryPolicy } from './RetryPolicy';
import { PurchaseCoreData, StripeStoreData } from '../../dto/Purchase';
import { Environment } from '../../dto/Environment';
import { UserPropertyData } from '../userProperties';
export declare enum ApiHeader {
    Accept = "Accept",
    ContentType = "Content-Type",
    Authorization = "Authorization",
    Locale = "User-Locale",
    Source = "Source",
    SourceVersion = "Source-Version",
    Platform = "Platform",
    PlatformVersion = "Platform-Version",
    UserID = "User-Id"
}
export declare enum ApiEndpoint {
    Users = "v3/users",
    Identity = "v3/identities",
    Properties = "properties"
}
export declare enum RequestType {
    POST = "POST",
    GET = "GET",
    DELETE = "DELETE",
    PUT = "PUT"
}
export declare type RequestHeaders = Record<string, string>;
export declare type RequestBody = Record<string, unknown | null> | Array<unknown>;
export declare type NetworkRequest = {
    url: string;
    type: RequestType;
    headers: RequestHeaders;
    body?: RequestBody;
};
export declare type NetworkResponseBase = {
    code: number;
};
export declare type RawNetworkResponse = NetworkResponseBase & {
    payload: any;
};
export declare type ApiResponseError = NetworkResponseBase & {
    message: string;
    type?: string;
    apiCode?: string;
    isSuccess: false;
};
export declare type ApiResponseSuccess<T> = NetworkResponseBase & {
    data: T;
    isSuccess: true;
};
export declare type ApiError = {
    message: string;
    type?: string;
    code?: string;
};
export declare type NetworkRetryConfig = {
    shouldRetry: boolean;
    attemptIndex: number;
    delay: number;
};
export declare type NetworkClient = {
    execute: (request: NetworkRequest) => Promise<RawNetworkResponse>;
};
export declare type ApiInteractor = {
    execute: <T>(request: NetworkRequest, retryPolicy?: RetryPolicy) => Promise<ApiResponseSuccess<T> | ApiResponseError>;
};
export declare type RequestConfigurator = {
    configureUserRequest: (id: string) => NetworkRequest;
    configureCreateUserRequest: (id: string, environment: Environment) => NetworkRequest;
    configureUserPropertiesSendRequest: (userId: string, properties: UserPropertyData[]) => NetworkRequest;
    configureUserPropertiesGetRequest: (userId: string) => NetworkRequest;
    configureIdentityRequest: (identityId: string) => NetworkRequest;
    configureCreateIdentityRequest: (qonversionId: string, identityId: string) => NetworkRequest;
    configureEntitlementsRequest: (userId: string) => NetworkRequest;
    configureStripePurchaseRequest: (userId: string, data: PurchaseCoreData & StripeStoreData) => NetworkRequest;
};
export declare type HeaderBuilder = {
    buildCommonHeaders: () => RequestHeaders;
};
