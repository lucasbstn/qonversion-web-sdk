import { ControllersAssembly, MiscAssembly, NetworkAssembly, ServicesAssembly, StorageAssembly } from './types';
import { InternalConfig } from '../InternalConfig';
import { ApiInteractor, HeaderBuilder, NetworkClient, RequestConfigurator, RetryDelayCalculator } from '../network';
import { IdentityService, UserDataProvider, UserController, UserDataStorage, UserIdGenerator, UserService } from '../user';
import { Logger } from '../logger';
import { LocalStorage } from '../common';
import { UserPropertiesController, UserPropertiesService, UserPropertiesStorage } from '../userProperties';
import { DelayedWorker } from '../utils/DelayedWorker';
import { EntitlementsController, EntitlementsService } from '../entitlements';
import { PurchasesController, PurchasesService } from '../purchases';
export declare class DependenciesAssembly implements MiscAssembly, NetworkAssembly, ServicesAssembly, ControllersAssembly, StorageAssembly {
    private readonly networkAssembly;
    private readonly miscAssembly;
    private readonly servicesAssembly;
    private readonly controllersAssembly;
    private readonly storageAssembly;
    constructor(networkAssembly: NetworkAssembly, miscAssembly: MiscAssembly, servicesAssembly: ServicesAssembly, controllersAssembly: ControllersAssembly, storageAssembly: StorageAssembly);
    logger(): Logger;
    exponentialDelayCalculator(): RetryDelayCalculator;
    delayedWorker(): DelayedWorker;
    userIdGenerator(): UserIdGenerator;
    exponentialApiInteractor(): ApiInteractor;
    infiniteExponentialApiInteractor(): ApiInteractor;
    headerBuilder(): HeaderBuilder;
    networkClient(): NetworkClient;
    requestConfigurator(): RequestConfigurator;
    localStorage(): LocalStorage;
    userDataProvider(): UserDataProvider;
    userDataStorage(): UserDataStorage;
    sentUserPropertiesStorage(): UserPropertiesStorage;
    pendingUserPropertiesStorage(): UserPropertiesStorage;
    userPropertiesService(): UserPropertiesService;
    userService(): UserService;
    userServiceDecorator(): UserService;
    identityService(): IdentityService;
    entitlementsService(): EntitlementsService;
    purchasesService(): PurchasesService;
    userPropertiesController(): UserPropertiesController;
    userController(): UserController;
    entitlementsController(): EntitlementsController;
    purchasesController(): PurchasesController;
}
export declare class DependenciesAssemblyBuilder {
    private readonly internalConfig;
    constructor(internalConfig: InternalConfig);
    build(): DependenciesAssembly;
}
