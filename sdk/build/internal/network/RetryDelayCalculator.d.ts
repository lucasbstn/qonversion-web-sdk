export declare type RetryDelayCalculator = {
    countDelay: (minDelay: number, retriesCount: number) => number;
};
export declare class ExponentialDelayCalculator implements RetryDelayCalculator {
    private readonly jitter;
    private readonly factor;
    private readonly maxDelayMS;
    countDelay(minDelay: number, retriesCount: number): number;
}
