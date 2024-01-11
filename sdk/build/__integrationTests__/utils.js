"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectQonversionErrorAsync = exports.getDependencyAssembly = exports.getCurrentTs = void 0;
const QonversionError_1 = require("../exception/QonversionError");
const DependenciesAssembly_1 = require("../internal/di/DependenciesAssembly");
const QonversionConfigBuilder_1 = require("../QonversionConfigBuilder");
const constants_1 = require("./constants");
const internal_1 = require("../internal");
const Environment_1 = require("../dto/Environment");
const getCurrentTs = () => Math.floor(Date.now() / 1000);
exports.getCurrentTs = getCurrentTs;
const getDependencyAssembly = (config = {}) => {
    var _a;
    const qonversionConfig = new QonversionConfigBuilder_1.QonversionConfigBuilder(constants_1.PROJECT_KEY_FOR_TESTS)
        .setEnvironment((_a = config.environment) !== null && _a !== void 0 ? _a : Environment_1.Environment.Production)
        .build();
    if (config.apiUrl) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // noinspection JSConstantReassignment
        qonversionConfig.networkConfig.apiUrl = config.apiUrl;
    }
    const internalConfig = new internal_1.InternalConfig(qonversionConfig);
    return new DependenciesAssembly_1.DependenciesAssemblyBuilder(internalConfig).build();
};
exports.getDependencyAssembly = getDependencyAssembly;
const expectQonversionErrorAsync = async (code, message, method) => {
    try {
        await method();
    }
    catch (e) {
        expect(e).toBeInstanceOf(QonversionError_1.QonversionError);
        expect(e.code).toBe(code);
        expect(e.message).toBe(message);
        return;
    }
    fail("Exception expected but was not thrown");
};
exports.expectQonversionErrorAsync = expectQonversionErrorAsync;
const fail = (reason = "Fail was called in a test") => {
    throw new Error(reason);
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fail = fail;
