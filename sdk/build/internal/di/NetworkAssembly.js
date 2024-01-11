"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkAssemblyImpl = void 0;
const network_1 = require("../network");
class NetworkAssemblyImpl {
    constructor(internalConfig, storageAssembly, miscAssembly) {
        this.internalConfig = internalConfig;
        this.storageAssembly = storageAssembly;
        this.miscAssembly = miscAssembly;
    }
    networkClient() {
        return new network_1.NetworkClientImpl();
    }
    requestConfigurator() {
        return new network_1.RequestConfiguratorImpl(this.headerBuilder(), this.internalConfig.networkConfig.apiUrl, this.internalConfig, this.storageAssembly.userDataProvider());
    }
    headerBuilder() {
        return new network_1.HeaderBuilderImpl(this.internalConfig, this.internalConfig, this.storageAssembly.userDataProvider());
    }
    exponentialApiInteractor() {
        return this.apiInteractor(new network_1.RetryPolicyExponential());
    }
    infiniteExponentialApiInteractor() {
        return this.apiInteractor(new network_1.RetryPolicyInfiniteExponential());
    }
    apiInteractor(retryPolicy) {
        return new network_1.ApiInteractorImpl(this.networkClient(), this.miscAssembly.exponentialDelayCalculator(), this.internalConfig, retryPolicy);
    }
}
exports.NetworkAssemblyImpl = NetworkAssemblyImpl;
