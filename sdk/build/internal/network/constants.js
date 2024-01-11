"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_CODES_BLOCKING_FURTHER_EXECUTIONS = exports.HTTP_CODE_NOT_FOUND = exports.MAX_INTERNAL_SERVER_ERROR_CODE = exports.MIN_INTERNAL_SERVER_ERROR_CODE = exports.MAX_SUCCESS_CODE = exports.MIN_SUCCESS_CODE = exports.API_URL = exports.PLATFORM_FOR_API = exports.DEBUG_MODE_PREFIX = exports.DEFAULT_MIN_DELAY_MS = exports.DEFAULT_RETRY_COUNT = void 0;
exports.DEFAULT_RETRY_COUNT = 3;
exports.DEFAULT_MIN_DELAY_MS = 500;
exports.DEBUG_MODE_PREFIX = "test_";
exports.PLATFORM_FOR_API = "web";
exports.API_URL = "https://api.qonversion.io";
exports.MIN_SUCCESS_CODE = 200;
exports.MAX_SUCCESS_CODE = 299;
exports.MIN_INTERNAL_SERVER_ERROR_CODE = 500;
exports.MAX_INTERNAL_SERVER_ERROR_CODE = 599;
exports.HTTP_CODE_NOT_FOUND = 404;
exports.ERROR_CODES_BLOCKING_FURTHER_EXECUTIONS = [
    401,
    402,
    418, // I'M A TEAPOT - for possible api usage.
];
