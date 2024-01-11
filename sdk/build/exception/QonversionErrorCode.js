"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QonversionErrorCode = void 0;
var QonversionErrorCode;
(function (QonversionErrorCode) {
    QonversionErrorCode["ConfigPreparation"] = "Failed to prepare configuration for SDK initialization";
    QonversionErrorCode["NotInitialized"] = "Qonversion has not been initialized. You should call the initialize method before accessing the shared instance of Qonversion";
    QonversionErrorCode["RequestDenied"] = "Request denied";
    QonversionErrorCode["BackendError"] = "Qonversion API returned an error";
    QonversionErrorCode["UserNotFound"] = "Qonversion user not found";
    QonversionErrorCode["IdentityNotFound"] = "User with requested identity not found";
})(QonversionErrorCode = exports.QonversionErrorCode || (exports.QonversionErrorCode = {}));
