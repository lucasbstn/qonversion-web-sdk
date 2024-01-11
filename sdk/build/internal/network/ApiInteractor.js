"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiInteractorImpl = void 0;
const RetryPolicy_1 = require("./RetryPolicy");
const QonversionError_1 = require("../../exception/QonversionError");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
const utils_1 = require("./utils");
const constants_1 = require("./constants");
class ApiInteractorImpl {
    constructor(networkClient, delayCalculator, configHolder, defaultRetryPolicy = new RetryPolicy_1.RetryPolicyExponential()) {
        this.networkClient = networkClient;
        this.delayCalculator = delayCalculator;
        this.configHolder = configHolder;
        this.defaultRetryPolicy = defaultRetryPolicy;
    }
    async execute(request, retryPolicy = this.defaultRetryPolicy, attemptIndex = 0) {
        if (!this.configHolder.canSendRequests()) {
            throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.RequestDenied);
        }
        let executionError = undefined;
        let response = undefined;
        try {
            response = await this.networkClient.execute(request);
        }
        catch (cause) {
            if (cause instanceof QonversionError_1.QonversionError) {
                executionError = cause;
            }
            else {
                throw cause;
            }
        }
        if (response && (0, utils_1.isSuccessfulResponse)(response.code)) {
            return {
                code: response.code,
                data: response.payload,
                isSuccess: true,
            };
        }
        if (response && constants_1.ERROR_CODES_BLOCKING_FURTHER_EXECUTIONS.includes(response.code)) {
            this.configHolder.setCanSendRequests(false);
            return ApiInteractorImpl.getErrorResponse(response, executionError);
        }
        const shouldTryToRetry = (!!response && (0, utils_1.isInternalServerErrorResponse)(response.code)) || !!executionError;
        if (shouldTryToRetry) {
            const retryConfig = this.prepareRetryConfig(retryPolicy, attemptIndex);
            if (retryConfig.shouldRetry) {
                await (0, utils_1.delay)(retryConfig.delay);
                return await this.execute(request, retryPolicy, retryConfig.attemptIndex);
            }
        }
        return ApiInteractorImpl.getErrorResponse(response, executionError);
    }
    static getErrorResponse(response, executionError) {
        if (response) {
            const apiError = response.payload.error;
            return {
                code: response.code,
                message: apiError.message,
                type: apiError.type,
                apiCode: apiError.code,
                isSuccess: false,
            };
        }
        else if (executionError) {
            throw executionError;
        }
        else {
            // Unacceptable state.
            throw new Error('Unreachable code. Either response or executionError should be defined');
        }
    }
    prepareRetryConfig(retryPolicy, attemptIndex) {
        let shouldRetry = false;
        const newAttemptIndex = attemptIndex + 1;
        let minDelay = 0;
        let delay = 0;
        if (retryPolicy instanceof RetryPolicy_1.RetryPolicyInfiniteExponential) {
            shouldRetry = true;
            minDelay = retryPolicy.minDelay;
        }
        else if (retryPolicy instanceof RetryPolicy_1.RetryPolicyExponential) {
            shouldRetry = retryPolicy.retryCount > attemptIndex;
            minDelay = retryPolicy.minDelay;
        }
        if (minDelay < 0) {
            shouldRetry = false;
        }
        if (shouldRetry) {
            delay = this.delayCalculator.countDelay(minDelay, newAttemptIndex);
        }
        return {
            shouldRetry,
            attemptIndex: newAttemptIndex,
            delay,
        };
    }
}
exports.ApiInteractorImpl = ApiInteractorImpl;
