"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllersAssemblyImpl = void 0;
const userProperties_1 = require("../userProperties");
const user_1 = require("../user");
const entitlements_1 = require("../entitlements");
const purchases_1 = require("../purchases");
class ControllersAssemblyImpl {
    constructor(miscAssembly, storageAssembly, servicesAssembly) {
        this.miscAssembly = miscAssembly;
        this.storageAssembly = storageAssembly;
        this.servicesAssembly = servicesAssembly;
    }
    userPropertiesController() {
        return new userProperties_1.UserPropertiesControllerImpl(this.storageAssembly.pendingUserPropertiesStorage(), this.storageAssembly.sentUserPropertiesStorage(), this.servicesAssembly.userPropertiesService(), this.storageAssembly.userDataStorage(), this.miscAssembly.delayedWorker(), this.miscAssembly.logger(), this.userController());
    }
    userController() {
        if (this.sharedUserController) {
            return this.sharedUserController;
        }
        this.sharedUserController = new user_1.UserControllerImpl(this.servicesAssembly.userServiceDecorator(), this.servicesAssembly.identityService(), this.storageAssembly.userDataStorage(), this.miscAssembly.userIdGenerator(), this.miscAssembly.logger());
        return this.sharedUserController;
    }
    entitlementsController() {
        return new entitlements_1.EntitlementsControllerImpl(this.userController(), this.servicesAssembly.entitlementsService(), this.storageAssembly.userDataStorage(), this.miscAssembly.logger());
    }
    purchasesController() {
        return new purchases_1.PurchasesControllerImpl(this.servicesAssembly.purchasesService(), this.storageAssembly.userDataStorage(), this.miscAssembly.logger());
    }
}
exports.ControllersAssemblyImpl = ControllersAssemblyImpl;
