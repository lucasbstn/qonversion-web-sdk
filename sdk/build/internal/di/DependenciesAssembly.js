"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependenciesAssemblyBuilder = exports.DependenciesAssembly = void 0;
const MiscAssembly_1 = require("./MiscAssembly");
const NetworkAssembly_1 = require("./NetworkAssembly");
const ServicesAssembly_1 = require("./ServicesAssembly");
const ControllersAssembly_1 = require("./ControllersAssembly");
const StorageAssembly_1 = require("./StorageAssembly");
class DependenciesAssembly {
    constructor(networkAssembly, miscAssembly, servicesAssembly, controllersAssembly, storageAssembly) {
        this.networkAssembly = networkAssembly;
        this.miscAssembly = miscAssembly;
        this.servicesAssembly = servicesAssembly;
        this.controllersAssembly = controllersAssembly;
        this.storageAssembly = storageAssembly;
    }
    ;
    logger() {
        return this.miscAssembly.logger();
    }
    exponentialDelayCalculator() {
        return this.miscAssembly.exponentialDelayCalculator();
    }
    delayedWorker() {
        return this.miscAssembly.delayedWorker();
    }
    userIdGenerator() {
        return this.miscAssembly.userIdGenerator();
    }
    exponentialApiInteractor() {
        return this.networkAssembly.exponentialApiInteractor();
    }
    infiniteExponentialApiInteractor() {
        return this.networkAssembly.infiniteExponentialApiInteractor();
    }
    headerBuilder() {
        return this.networkAssembly.headerBuilder();
    }
    networkClient() {
        return this.networkAssembly.networkClient();
    }
    requestConfigurator() {
        return this.networkAssembly.requestConfigurator();
    }
    localStorage() {
        return this.storageAssembly.localStorage();
    }
    userDataProvider() {
        return this.storageAssembly.userDataProvider();
    }
    userDataStorage() {
        return this.storageAssembly.userDataStorage();
    }
    sentUserPropertiesStorage() {
        return this.storageAssembly.sentUserPropertiesStorage();
    }
    pendingUserPropertiesStorage() {
        return this.storageAssembly.pendingUserPropertiesStorage();
    }
    userPropertiesService() {
        return this.servicesAssembly.userPropertiesService();
    }
    userService() {
        return this.servicesAssembly.userService();
    }
    userServiceDecorator() {
        return this.servicesAssembly.userServiceDecorator();
    }
    identityService() {
        return this.servicesAssembly.identityService();
    }
    entitlementsService() {
        return this.servicesAssembly.entitlementsService();
    }
    purchasesService() {
        return this.servicesAssembly.purchasesService();
    }
    userPropertiesController() {
        return this.controllersAssembly.userPropertiesController();
    }
    userController() {
        return this.controllersAssembly.userController();
    }
    entitlementsController() {
        return this.controllersAssembly.entitlementsController();
    }
    purchasesController() {
        return this.controllersAssembly.purchasesController();
    }
}
exports.DependenciesAssembly = DependenciesAssembly;
class DependenciesAssemblyBuilder {
    constructor(internalConfig) {
        this.internalConfig = internalConfig;
    }
    ;
    build() {
        const miscAssembly = new MiscAssembly_1.MiscAssemblyImpl(this.internalConfig);
        const storageAssembly = new StorageAssembly_1.StorageAssemblyImpl();
        const networkAssembly = new NetworkAssembly_1.NetworkAssemblyImpl(this.internalConfig, storageAssembly, miscAssembly);
        const servicesAssembly = new ServicesAssembly_1.ServicesAssemblyImpl(this.internalConfig, networkAssembly);
        const controllersAssembly = new ControllersAssembly_1.ControllersAssemblyImpl(miscAssembly, storageAssembly, servicesAssembly);
        return new DependenciesAssembly(networkAssembly, miscAssembly, servicesAssembly, controllersAssembly, storageAssembly);
    }
    ;
}
exports.DependenciesAssemblyBuilder = DependenciesAssemblyBuilder;
