"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QonversionError_1 = require("./exception/QonversionError");
const QonversionErrorCode_1 = require("./exception/QonversionErrorCode");
const internal_1 = require("./internal");
const DependenciesAssembly_1 = require("./internal/di/DependenciesAssembly");
class Qonversion {
    constructor() { }
    /**
     * Use this method to get a current initialized instance of the Qonversion SDK.
     * Please, use the method only after calling {@link Qonversion.initialize}.
     * Otherwise, calling the method will cause an exception.
     *
     * @return Current initialized instance of the Qonversion SDK.
     * @throws a {@link QonversionError} with {@link QonversionErrorCode.NotInitialized}.
     */
    static getSharedInstance() {
        if (!Qonversion.backingInstance) {
            throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.NotInitialized);
        }
        return Qonversion.backingInstance;
    }
    /**
     * An entry point to use Qonversion SDK. Call to initialize Qonversion SDK with required and extra configs.
     * The function is the best way to set additional configs you need to use Qonversion SDK.
     * You still have an option to set a part of additional configs later via calling separated setters.
     *
     * @param config a config that contains key SDK settings.
     * Call {@link QonversionConfigBuilder.build} to configure and create a {@link QonversionConfig} instance.
     * @return Initialized instance of the Qonversion SDK.
     */
    static initialize(config) {
        const internalConfig = new internal_1.InternalConfig(config);
        const dependenciesAssembly = new DependenciesAssembly_1.DependenciesAssemblyBuilder(internalConfig).build();
        const instance = new internal_1.QonversionInternal(internalConfig, dependenciesAssembly);
        Qonversion.backingInstance = instance;
        return instance;
    }
}
Qonversion.backingInstance = undefined;
exports.default = Qonversion;
