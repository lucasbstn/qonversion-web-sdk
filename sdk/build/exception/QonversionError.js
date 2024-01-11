"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QonversionError = void 0;
/**
 * Qonversion error that the SDK may throw on some calls.
 *
 * Check error code and details to get more information about concrete error you handle.
 */
class QonversionError extends Error {
    constructor(code, details, cause) {
        let message = code;
        if (details) {
            message += '. ' + details;
        }
        if (cause) {
            message += '. ' + cause.message;
        }
        super(message);
        this.code = code;
        this.cause = cause;
    }
}
exports.QonversionError = QonversionError;
