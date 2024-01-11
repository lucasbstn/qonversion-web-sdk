"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
/**
 * This enum contains different available settings for Environment.
 * Provide it to the configuration object via {@link Qonversion.initialize}
 * while initializing the SDK or via {@link QonversionInstance.setEnvironment}
 * after initializing the SDK. The default value SDK uses is {@link Environment.Production}.
 */
var Environment;
(function (Environment) {
    Environment["Sandbox"] = "sandbox";
    Environment["Production"] = "prod";
})(Environment = exports.Environment || (exports.Environment = {}));
