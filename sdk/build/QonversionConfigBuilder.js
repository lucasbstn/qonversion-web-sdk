"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QonversionConfigBuilder = void 0;
const QonversionError_1 = require("./exception/QonversionError");
const QonversionErrorCode_1 = require("./exception/QonversionErrorCode");
const Environment_1 = require("./dto/Environment");
const LogLevel_1 = require("./dto/LogLevel");
const network_1 = require("./internal/network");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../../package.json');
const DEFAULT_LOG_TAG = "Qonversion";
/**
 * The builder of Qonversion configuration instance.
 *
 * This class contains a variety of methods to customize the Qonversion SDK behavior.
 * You can call them sequentially and call {@link build} finally to get the configuration instance.
 */
class QonversionConfigBuilder {
    /**
     * Creates an instance of a builder
     * @param projectKey your Project Key from Qonversion Dashboard
     */
    constructor(projectKey) {
        this.environment = Environment_1.Environment.Production;
        this.logLevel = LogLevel_1.LogLevel.Info;
        this.logTag = DEFAULT_LOG_TAG;
        this.projectKey = projectKey;
    }
    ;
    /**
     * Set current application {@link Environment}. Used to distinguish sandbox and production users.
     *
     * @param environment current environment.
     * @return builder instance for chain calls.
     */
    setEnvironment(environment) {
        this.environment = environment;
        return this;
    }
    ;
    /**
     * Define the level of the logs that the SDK prints.
     * The more strict the level is, the fewer logs will be written.
     * For example, setting the log level as Warning will disable all info and verbose logs.
     *
     * @param logLevel the desired allowed log level.
     * @return builder instance for chain calls.
     */
    setLogLevel(logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    ;
    /**
     * Define the log tag that the Qonversion SDK will print with every log message.
     * For example, you can use it to filter the Qonversion SDK logs and your app own logs together.
     *
     * @param logTag the desired log tag.
     * @return builder instance for chain calls.
     */
    setLogTag(logTag) {
        this.logTag = logTag;
        return this;
    }
    ;
    /**
     * Generate {@link QonversionConfig} instance with all the provided configurations.
     *
     * @throws a {@link QonversionError} if unacceptable configuration was provided.
     * @return the complete {@link QonversionConfig} instance.
     */
    build() {
        if (!this.projectKey) {
            throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.ConfigPreparation, "Project key is empty");
        }
        const primaryConfig = {
            projectKey: this.projectKey,
            environment: this.environment,
            sdkVersion: packageJson.version,
        };
        const loggerConfig = {
            logLevel: this.logLevel,
            logTag: this.logTag,
        };
        const networkConfig = {
            canSendRequests: true,
            apiUrl: network_1.API_URL,
        };
        return {
            primaryConfig,
            loggerConfig,
            networkConfig,
        };
    }
    ;
}
exports.QonversionConfigBuilder = QonversionConfigBuilder;
