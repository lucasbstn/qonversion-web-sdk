import { QonversionErrorCode } from '../exception/QonversionErrorCode';
import { DependenciesAssembly } from '../internal/di/DependenciesAssembly';
import { Environment } from '../dto/Environment';
export declare const getCurrentTs: () => number;
export declare const getDependencyAssembly: (config?: {
    apiUrl?: string;
    environment?: Environment;
}) => DependenciesAssembly;
export declare const expectQonversionErrorAsync: (code: QonversionErrorCode, message: string, method: () => Promise<unknown>) => Promise<void>;
