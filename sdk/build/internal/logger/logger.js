"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("../../dto/LogLevel");
class LoggerImpl {
    constructor(loggerConfigProvider) {
        this.loggerConfigProvider = loggerConfigProvider;
    }
    verbose(message, ...objects) {
        this.log(LogLevel_1.LogLevel.Verbose, console.log, message, objects);
    }
    info(message, ...objects) {
        this.log(LogLevel_1.LogLevel.Info, console.info, message, objects);
    }
    warn(message, ...objects) {
        this.log(LogLevel_1.LogLevel.Warning, console.warn, message, objects);
    }
    error(message, ...objects) {
        this.log(LogLevel_1.LogLevel.Error, console.error, message, objects);
    }
    log(logLevel, logMethod, message, objects) {
        const allowedLogLevel = this.loggerConfigProvider.getLogLevel();
        if (logLevel >= allowedLogLevel) {
            const logMessage = `${this.loggerConfigProvider.getLogTag()}: ${message}`;
            logMethod(logMessage, ...objects);
        }
    }
}
exports.default = LoggerImpl;
