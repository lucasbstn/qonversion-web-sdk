"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesAssemblyImpl = void 0;
const userProperties_1 = require("../userProperties");
const user_1 = require("../user");
const entitlements_1 = require("../entitlements");
const purchases_1 = require("../purchases");
class ServicesAssemblyImpl {
    constructor(internalConfig, networkAssembly) {
        this.internalConfig = internalConfig;
        this.networkAssembly = networkAssembly;
    }
    userPropertiesService() {
        return new userProperties_1.UserPropertiesServiceImpl(this.networkAssembly.requestConfigurator(), this.networkAssembly.infiniteExponentialApiInteractor());
    }
    userService() {
        return new user_1.UserServiceImpl(this.internalConfig, this.networkAssembly.requestConfigurator(), this.networkAssembly.exponentialApiInteractor());
    }
    userServiceDecorator() {
        return new user_1.UserServiceDecorator(this.userService());
    }
    identityService() {
        return new user_1.IdentityServiceImpl(this.networkAssembly.requestConfigurator(), this.networkAssembly.exponentialApiInteractor());
    }
    entitlementsService() {
        return new entitlements_1.EntitlementsServiceImpl(this.networkAssembly.requestConfigurator(), this.networkAssembly.exponentialApiInteractor());
    }
    purchasesService() {
        return new purchases_1.PurchaseServiceImpl(this.networkAssembly.requestConfigurator(), this.networkAssembly.exponentialApiInteractor());
    }
}
exports.ServicesAssemblyImpl = ServicesAssemblyImpl;
