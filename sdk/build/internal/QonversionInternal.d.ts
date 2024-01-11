import { QonversionInstance } from '../types';
import { InternalConfig } from './InternalConfig';
import { LogLevel } from '../dto/LogLevel';
import { Environment } from '../dto/Environment';
import { DependenciesAssembly } from './di/DependenciesAssembly';
import { UserPropertyKey } from '../dto/UserPropertyKey';
import { Entitlement } from '../dto/Entitlement';
import { PurchaseCoreData, StripeStoreData, UserPurchase } from '../dto/Purchase';
import { UserProperties } from '../dto/UserProperties';
export declare class QonversionInternal implements QonversionInstance {
    private readonly internalConfig;
    private readonly userPropertiesController;
    private readonly userController;
    private readonly entitlementsController;
    private readonly purchasesController;
    private readonly logger;
    constructor(internalConfig: InternalConfig, dependenciesAssembly: DependenciesAssembly);
    sendStripePurchase(data: PurchaseCoreData & StripeStoreData): Promise<UserPurchase>;
    entitlements(): Promise<Entitlement[]>;
    identify(userId: string): Promise<void>;
    logout(): Promise<void>;
    setCustomUserProperty(key: string, value: string): void;
    setUserProperties(userProperties: Record<string, string>): void;
    setUserProperty(property: UserPropertyKey, value: string): void;
    userProperties(): Promise<UserProperties>;
    finish(): void;
    setEnvironment(environment: Environment): void;
    setLogLevel(logLevel: LogLevel): void;
    setLogTag(logTag: string): void;
}
