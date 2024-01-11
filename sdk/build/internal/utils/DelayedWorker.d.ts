export declare type DelayedWorker = {
    doDelayed: (delayMs: number, action: () => Promise<void>, ignoreExistingJob?: boolean) => void;
    doImmediately: (action: () => Promise<void>) => void;
    cancel: () => void;
    isInProgress: () => boolean;
};
export declare class DelayedWorkerImpl implements DelayedWorker {
    private timeoutId;
    doDelayed(delayMs: number, action: () => Promise<void>, ignoreExistingJob?: boolean): void;
    doImmediately(action: () => Promise<void>): void;
    cancel(): void;
    isInProgress(): boolean;
}
