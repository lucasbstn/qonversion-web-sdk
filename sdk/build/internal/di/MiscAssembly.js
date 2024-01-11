"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscAssemblyImpl = void 0;
const logger_1 = require("../logger");
const network_1 = require("../network");
const DelayedWorker_1 = require("../utils/DelayedWorker");
const user_1 = require("../user");
class MiscAssemblyImpl {
    constructor(internalConfig) {
        this.internalConfig = internalConfig;
    }
    logger() {
        return new logger_1.default(this.internalConfig);
    }
    exponentialDelayCalculator() {
        return new network_1.ExponentialDelayCalculator();
    }
    delayedWorker() {
        return new DelayedWorker_1.DelayedWorkerImpl();
    }
    userIdGenerator() {
        return new user_1.UserIdGeneratorImpl();
    }
}
exports.MiscAssemblyImpl = MiscAssemblyImpl;
