"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageAssemblyImpl = void 0;
const user_1 = require("../user");
const common_1 = require("../common");
const userProperties_1 = require("../userProperties");
class StorageAssemblyImpl {
    localStorage() {
        return new common_1.LocalStorageImpl();
    }
    userDataProvider() {
        return this.userDataStorage();
    }
    userDataStorage() {
        if (this.sharedUserDataStorage) {
            return this.sharedUserDataStorage;
        }
        this.sharedUserDataStorage = new user_1.UserDataStorageImpl(this.localStorage());
        return this.sharedUserDataStorage;
    }
    pendingUserPropertiesStorage() {
        if (this.sharedPendingUserPropertiesStorage) {
            return this.sharedPendingUserPropertiesStorage;
        }
        this.sharedPendingUserPropertiesStorage = this.userPropertiesStorage(common_1.StorageConstants.PendingUserProperties);
        return this.sharedPendingUserPropertiesStorage;
    }
    sentUserPropertiesStorage() {
        if (this.sharedSentUserPropertiesStorage) {
            return this.sharedSentUserPropertiesStorage;
        }
        this.sharedSentUserPropertiesStorage = this.userPropertiesStorage(common_1.StorageConstants.SentUserProperties);
        return this.sharedSentUserPropertiesStorage;
    }
    userPropertiesStorage(key) {
        return new userProperties_1.UserPropertiesStorageImpl(this.localStorage(), key);
    }
}
exports.StorageAssemblyImpl = StorageAssemblyImpl;
