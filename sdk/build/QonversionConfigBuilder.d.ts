import { Environment } from './dto/Environment';
import { LogLevel } from './dto/LogLevel';
import { QonversionConfig } from './types';
/**
 * The builder of Qonversion configuration instance.
 *
 * This class contains a variety of methods to customize the Qonversion SDK behavior.
 * You can call them sequentially and call {@link build} finally to get the configuration instance.
 */
export declare class QonversionConfigBuilder {
    private readonly projectKey;
    private environment;
    private logLevel;
    private logTag;
    /**
     * Creates an instance of a builder
     * @param projectKey your Project Key from Qonversion Dashboard
     */
    constructor(projectKey: string);
    /**
     * Set current application {@link Environment}. Used to distinguish sandbox and production users.
     *
     * @param environment current environment.
     * @return builder instance for chain calls.
     */
    setEnvironment(environment: Environment): QonversionConfigBuilder;
    /**
     * Define the level of the logs that the SDK prints.
     * The more strict the level is, the fewer logs will be written.
     * For example, setting the log level as Warning will disable all info and verbose logs.
     *
     * @param logLevel the desired allowed log level.
     * @return builder instance for chain calls.
     */
    setLogLevel(logLevel: LogLevel): QonversionConfigBuilder;
    /**
     * Define the log tag that the Qonversion SDK will print with every log message.
     * For example, you can use it to filter the Qonversion SDK logs and your app own logs together.
     *
     * @param logTag the desired log tag.
     * @return builder instance for chain calls.
     */
    setLogTag(logTag: string): QonversionConfigBuilder;
    /**
     * Generate {@link QonversionConfig} instance with all the provided configurations.
     *
     * @throws a {@link QonversionError} if unacceptable configuration was provided.
     * @return the complete {@link QonversionConfig} instance.
     */
    build(): QonversionConfig;
}
