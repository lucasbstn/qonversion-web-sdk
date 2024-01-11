import { MiscAssembly } from './types';
import { InternalConfig } from '../InternalConfig';
import { Logger } from '../logger';
import { RetryDelayCalculator } from '../network';
import { DelayedWorker } from '../utils/DelayedWorker';
import { UserIdGenerator } from '../user';
export declare class MiscAssemblyImpl implements MiscAssembly {
    private readonly internalConfig;
    constructor(internalConfig: InternalConfig);
    logger(): Logger;
    exponentialDelayCalculator(): RetryDelayCalculator;
    delayedWorker(): DelayedWorker;
    userIdGenerator(): UserIdGenerator;
}
