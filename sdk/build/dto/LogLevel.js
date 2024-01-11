"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
/**
 * This enum contains available settings for LogLevel.
 * Provide it to the configuration object via {@link Qonversion.initialize}
 * while initializing the SDK or via {@link QonversionInstance.setLogLevel}
 * after initializing the SDK. The default value SDK uses is {@link LogLevel.Info}.
 *
 * You could change the log level to make logs from the Qonversion SDK more detailed or strict.
 */
var LogLevel;
(function (LogLevel) {
    // All available logs (function started, function finished, data fetched, etc)
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    // Info level (data fetched, products loaded, user info fetched, etc)
    LogLevel[LogLevel["Info"] = 10] = "Info";
    // Warning level (data fetched partially, sandbox env enabled for release build, etc)
    LogLevel[LogLevel["Warning"] = 20] = "Warning";
    // Error level (data fetch failed, Google billing is not available, etc)
    LogLevel[LogLevel["Error"] = 30] = "Error";
    // Logging is disabled at all
    LogLevel[LogLevel["Disabled"] = Number.MAX_SAFE_INTEGER] = "Disabled";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
