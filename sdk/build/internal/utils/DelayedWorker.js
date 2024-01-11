"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelayedWorkerImpl = void 0;
class DelayedWorkerImpl {
    doDelayed(delayMs, action, ignoreExistingJob = false) {
        if (ignoreExistingJob && this.isInProgress()) {
            this.cancel();
        }
        if (!this.isInProgress()) {
            this.timeoutId = setTimeout(async () => {
                try {
                    await action();
                }
                finally {
                    this.timeoutId = undefined;
                }
            }, delayMs);
        }
    }
    doImmediately(action) {
        this.cancel();
        action().then(() => { });
    }
    cancel() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }
    }
    isInProgress() {
        return !!this.timeoutId;
    }
}
exports.DelayedWorkerImpl = DelayedWorkerImpl;
