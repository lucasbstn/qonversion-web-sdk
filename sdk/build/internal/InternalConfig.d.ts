import { EnvironmentProvider, LoggerConfigProvider, NetworkConfigHolder, PrimaryConfigProvider } from './types';
import { Environment } from '../dto/Environment';
import { LoggerConfig, NetworkConfig, PrimaryConfig, QonversionConfig } from '../types';
import { LogLevel } from '../dto/LogLevel';
export declare class InternalConfig implements PrimaryConfigProvider, NetworkConfigHolder, LoggerConfigProvider, EnvironmentProvider {
    primaryConfig: PrimaryConfig;
    readonly networkConfig: NetworkConfig;
    loggerConfig: LoggerConfig;
    constructor(qonversionConfig: QonversionConfig);
    canSendRequests(): boolean;
    setCanSendRequests(canSend: boolean): void;
    getEnvironment(): Environment;
    getLogLevel(): LogLevel;
    getLogTag(): string;
    getPrimaryConfig(): PrimaryConfig;
    isSandbox(): boolean;
}
