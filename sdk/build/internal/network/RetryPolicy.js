"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryPolicyInfiniteExponential = exports.RetryPolicyExponential = exports.RetryPolicyNone = void 0;
const constants_1 = require("./constants");
class RetryPolicyNone {
}
exports.RetryPolicyNone = RetryPolicyNone;
class RetryPolicyExponential {
    constructor(retryCount = constants_1.DEFAULT_RETRY_COUNT, minDelay = constants_1.DEFAULT_MIN_DELAY_MS) {
        this.retryCount = retryCount;
        this.minDelay = minDelay;
    }
}
exports.RetryPolicyExponential = RetryPolicyExponential;
class RetryPolicyInfiniteExponential {
    constructor(minDelay = constants_1.DEFAULT_MIN_DELAY_MS) {
        this.minDelay = minDelay;
    }
}
exports.RetryPolicyInfiniteExponential = RetryPolicyInfiniteExponential;
