import { MiscAssembly, NetworkAssembly, StorageAssembly } from './types';
import { ApiInteractor, HeaderBuilder, NetworkClient, RequestConfigurator } from '../network';
import { InternalConfig } from '../InternalConfig';
export declare class NetworkAssemblyImpl implements NetworkAssembly {
    private readonly internalConfig;
    private readonly storageAssembly;
    private readonly miscAssembly;
    constructor(internalConfig: InternalConfig, storageAssembly: StorageAssembly, miscAssembly: MiscAssembly);
    networkClient(): NetworkClient;
    requestConfigurator(): RequestConfigurator;
    headerBuilder(): HeaderBuilder;
    exponentialApiInteractor(): ApiInteractor;
    infiniteExponentialApiInteractor(): ApiInteractor;
    private apiInteractor;
}
