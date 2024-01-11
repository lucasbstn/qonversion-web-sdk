"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataStorageImpl = void 0;
const common_1 = require("../common");
const QonversionError_1 = require("../../exception/QonversionError");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
class UserDataStorageImpl {
    constructor(localStorage) {
        this.localStorage = localStorage;
        this.originalId = localStorage.getString(common_1.StorageConstants.OriginalUserId);
        this.identityId = localStorage.getString(common_1.StorageConstants.IdentityUserId);
    }
    getIdentityUserId() {
        return this.identityId;
    }
    getOriginalUserId() {
        return this.originalId;
    }
    requireOriginalUserId() {
        const id = this.getOriginalUserId();
        if (id) {
            return id;
        }
        throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.UserNotFound, "The user id was required but does not exist.");
    }
    clearIdentityUserId() {
        this.localStorage.remove(common_1.StorageConstants.IdentityUserId);
        this.identityId = undefined;
    }
    setIdentityUserId(identityUserId) {
        this.localStorage.putString(common_1.StorageConstants.IdentityUserId, identityUserId);
        this.identityId = identityUserId;
    }
    setOriginalUserId(originalUserId) {
        this.localStorage.putString(common_1.StorageConstants.OriginalUserId, originalUserId);
        this.originalId = originalUserId;
    }
}
exports.UserDataStorageImpl = UserDataStorageImpl;
