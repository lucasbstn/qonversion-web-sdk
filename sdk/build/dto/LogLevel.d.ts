/**
 * This enum contains available settings for LogLevel.
 * Provide it to the configuration object via {@link Qonversion.initialize}
 * while initializing the SDK or via {@link QonversionInstance.setLogLevel}
 * after initializing the SDK. The default value SDK uses is {@link LogLevel.Info}.
 *
 * You could change the log level to make logs from the Qonversion SDK more detailed or strict.
 */
export declare enum LogLevel {
    Verbose = 0,
    Info = 10,
    Warning = 20,
    Error = 30,
    Disabled
}
