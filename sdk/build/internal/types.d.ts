import { Environment } from '../dto/Environment';
import { LogLevel } from '../dto/LogLevel';
import { PrimaryConfig } from '../types';
export declare type EnvironmentProvider = {
    getEnvironment: () => Environment;
    isSandbox: () => boolean;
};
export declare type LoggerConfigProvider = {
    getLogLevel: () => LogLevel;
    getLogTag: () => string;
};
export declare type NetworkConfigHolder = {
    canSendRequests: () => boolean;
    setCanSendRequests: (canSend: boolean) => void;
};
export declare type PrimaryConfigProvider = {
    getPrimaryConfig: () => PrimaryConfig;
};
