"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.isInternalServerErrorResponse = exports.isSuccessfulResponse = void 0;
const constants_1 = require("./constants");
const isSuccessfulResponse = code => {
    return constants_1.MIN_SUCCESS_CODE <= code && code <= constants_1.MAX_SUCCESS_CODE;
};
exports.isSuccessfulResponse = isSuccessfulResponse;
const isInternalServerErrorResponse = code => {
    return constants_1.MIN_INTERNAL_SERVER_ERROR_CODE <= code && code <= constants_1.MAX_INTERNAL_SERVER_ERROR_CODE;
};
exports.isInternalServerErrorResponse = isInternalServerErrorResponse;
const delay = timeMs => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, timeMs);
    });
};
exports.delay = delay;
