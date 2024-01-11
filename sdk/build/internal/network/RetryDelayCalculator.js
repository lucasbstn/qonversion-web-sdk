"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExponentialDelayCalculator = void 0;
const dateUtils_1 = require("../utils/dateUtils");
const JITTER = 0.4;
const FACTOR = 2.4;
const MAX_DELAY_MS = 1000000;
class ExponentialDelayCalculator {
    constructor() {
        this.jitter = JITTER;
        this.factor = FACTOR;
        this.maxDelayMS = MAX_DELAY_MS;
    }
    countDelay(minDelay, retriesCount) {
        let delay = Math.floor(minDelay + Math.pow(this.factor, retriesCount) * dateUtils_1.MS_IN_SEC);
        const delta = Math.round(delay * this.jitter);
        delay += Math.floor(Math.random() * (delta + 1));
        return Math.min(delay, this.maxDelayMS);
    }
}
exports.ExponentialDelayCalculator = ExponentialDelayCalculator;
