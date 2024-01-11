import { ApiInteractor, NetworkClient, NetworkRequest, ApiResponseError, ApiResponseSuccess, NetworkRetryConfig, RawNetworkResponse } from './types';
import { RetryDelayCalculator } from './RetryDelayCalculator';
import { NetworkConfigHolder } from '../types';
import { RetryPolicy } from './RetryPolicy';
export declare class ApiInteractorImpl implements ApiInteractor {
    private readonly networkClient;
    private readonly delayCalculator;
    private readonly configHolder;
    private readonly defaultRetryPolicy;
    constructor(networkClient: NetworkClient, delayCalculator: RetryDelayCalculator, configHolder: NetworkConfigHolder, defaultRetryPolicy?: RetryPolicy);
    execute<T>(request: NetworkRequest, retryPolicy?: RetryPolicy, attemptIndex?: number): Promise<ApiResponseSuccess<T> | ApiResponseError>;
    static getErrorResponse(response?: RawNetworkResponse, executionError?: Error): ApiResponseError;
    prepareRetryConfig(retryPolicy: RetryPolicy, attemptIndex: number): NetworkRetryConfig;
}
