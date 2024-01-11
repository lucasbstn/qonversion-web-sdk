"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QonversionInternal = void 0;
const Qonversion_1 = require("../Qonversion");
class QonversionInternal {
    constructor(internalConfig, dependenciesAssembly) {
        this.internalConfig = internalConfig;
        this.logger = dependenciesAssembly.logger();
        this.userPropertiesController = dependenciesAssembly.userPropertiesController();
        this.userController = dependenciesAssembly.userController();
        this.entitlementsController = dependenciesAssembly.entitlementsController();
        this.purchasesController = dependenciesAssembly.purchasesController();
        this.logger.verbose("The QonversionInstance is created");
    }
    sendStripePurchase(data) {
        this.logger.verbose("sendStripePurchase() call");
        return this.purchasesController.sendStripePurchase(data);
    }
    entitlements() {
        this.logger.verbose("entitlements() call");
        return this.entitlementsController.getEntitlements();
    }
    identify(userId) {
        this.logger.verbose("identify() call");
        return this.userController.identify(userId);
    }
    logout() {
        this.logger.verbose("logout() call");
        return this.userController.logout();
    }
    setCustomUserProperty(key, value) {
        this.logger.verbose("setCustomUserProperty() call");
        this.userPropertiesController.setProperty(key, value);
    }
    setUserProperties(userProperties) {
        this.logger.verbose("setUserProperties() call");
        this.userPropertiesController.setProperties(userProperties);
    }
    setUserProperty(property, value) {
        this.logger.verbose("setUserProperty() call");
        this.userPropertiesController.setProperty(property, value);
    }
    async userProperties() {
        this.logger.verbose("userProperties() call");
        return await this.userPropertiesController.getProperties();
    }
    finish() {
        this.logger.verbose("finish() call");
        if (Qonversion_1.default["backingInstance"] == this) {
            Qonversion_1.default["backingInstance"] = undefined;
        }
    }
    setEnvironment(environment) {
        this.logger.verbose("setEnvironment() call");
        this.internalConfig.primaryConfig = Object.assign(Object.assign({}, this.internalConfig.primaryConfig), { environment });
    }
    setLogLevel(logLevel) {
        this.logger.verbose("setLogLevel() call");
        this.internalConfig.loggerConfig = Object.assign(Object.assign({}, this.internalConfig.loggerConfig), { logLevel });
    }
    setLogTag(logTag) {
        this.logger.verbose("setLogTag() call");
        this.internalConfig.loggerConfig = Object.assign(Object.assign({}, this.internalConfig.loggerConfig), { logTag });
    }
}
exports.QonversionInternal = QonversionInternal;
