export declare type RetryPolicy = {};
export declare class RetryPolicyNone implements RetryPolicy {
}
export declare class RetryPolicyExponential implements RetryPolicy {
    readonly retryCount: number;
    readonly minDelay: number;
    constructor(retryCount?: number, minDelay?: number);
}
export declare class RetryPolicyInfiniteExponential implements RetryPolicy {
    readonly minDelay: number;
    constructor(minDelay?: number);
}
