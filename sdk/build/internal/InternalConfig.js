"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalConfig = void 0;
const Environment_1 = require("../dto/Environment");
class InternalConfig {
    constructor(qonversionConfig) {
        this.primaryConfig = qonversionConfig.primaryConfig;
        this.networkConfig = qonversionConfig.networkConfig;
        this.loggerConfig = qonversionConfig.loggerConfig;
    }
    canSendRequests() {
        return this.networkConfig.canSendRequests;
    }
    setCanSendRequests(canSend) {
        this.networkConfig.canSendRequests = canSend;
    }
    getEnvironment() {
        return this.primaryConfig.environment;
    }
    getLogLevel() {
        return this.loggerConfig.logLevel;
    }
    getLogTag() {
        return this.loggerConfig.logTag;
    }
    getPrimaryConfig() {
        return this.primaryConfig;
    }
    isSandbox() {
        return this.getEnvironment() == Environment_1.Environment.Sandbox;
    }
}
exports.InternalConfig = InternalConfig;
