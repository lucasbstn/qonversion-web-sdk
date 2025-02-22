"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllerImpl = void 0;
const QonversionError_1 = require("../../exception/QonversionError");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
class UserControllerImpl {
    constructor(userService, identityService, userDataStorage, userIdGenerator, logger) {
        this.userChangedListeners = [];
        this.userService = userService;
        this.identityService = identityService;
        this.userDataStorage = userDataStorage;
        this.userIdGenerator = userIdGenerator;
        this.logger = logger;
        const existingUserId = userDataStorage.getOriginalUserId();
        if (!existingUserId) {
            this.logger.verbose('User doesn\'t exist, creating new one...');
            this.createUser()
                .then(() => this.logger.info('New user created on initialization'))
                .catch(error => this.logger.error('Failed to create new user on initialization', error));
        }
    }
    async getUser() {
        try {
            const userId = this.userDataStorage.requireOriginalUserId();
            this.logger.verbose('Sending user request', { userId });
            const apiUser = await this.userService.getUser(userId);
            this.logger.info('User info was successfully received from API', apiUser);
            return apiUser;
        }
        catch (error) {
            this.logger.error('Failed to get User from API', error);
            throw error;
        }
    }
    async identify(identityId) {
        if (identityId == this.userDataStorage.getIdentityUserId()) {
            this.logger.verbose('Current user has the same identity id', { identityId });
            return;
        }
        try {
            this.logger.verbose('Checking for existing user with the given identity id', { identityId });
            const newOriginalId = await this.identityService.obtainIdentity(identityId);
            this.handleSuccessfulIdentity(newOriginalId, identityId);
        }
        catch (error) {
            if (error instanceof QonversionError_1.QonversionError && error.code == QonversionErrorCode_1.QonversionErrorCode.IdentityNotFound) {
                const originalId = this.userDataStorage.requireOriginalUserId();
                try {
                    this.logger.verbose('No user found with the given identity id, linking current one', { userId: originalId, identityId });
                    const newOriginalId = await this.identityService.createIdentity(originalId, identityId);
                    this.handleSuccessfulIdentity(newOriginalId, identityId);
                }
                catch (secondaryError) {
                    this.logger.error(`Failed to create user identity for id ${identityId}`, secondaryError);
                    throw secondaryError;
                }
            }
            else {
                this.logger.error(`Failed to identify user with id ${identityId}`, error);
                throw error;
            }
        }
    }
    async logout() {
        if (!this.userDataStorage.getIdentityUserId()) {
            this.logger.verbose('No user is identified, no need to logout');
            return;
        }
        try {
            await this.createUser();
            this.logger.info('Logout is completed. A new user is successfully created.');
        }
        catch (error) {
            this.logger.error('Failed to create new user after logout.', error);
            throw error;
        }
    }
    async createUser() {
        const oldOriginalId = this.userDataStorage.getOriginalUserId();
        const oldIdentityId = this.userDataStorage.getIdentityUserId();
        this.userDataStorage.clearIdentityUserId();
        const newOriginalId = this.userIdGenerator.generate();
        this.userDataStorage.setOriginalUserId(newOriginalId);
        this.logger.verbose('Creating new user', { userId: newOriginalId });
        const user = this.userService.createUser(newOriginalId);
        this.fireUserChangedEvent(newOriginalId, oldOriginalId, oldIdentityId);
        return user;
    }
    subscribeOnUserChanges(listener) {
        this.userChangedListeners.push(listener);
    }
    handleSuccessfulIdentity(originalId, identityId) {
        const oldOriginalId = this.userDataStorage.getOriginalUserId();
        const oldIdentityId = this.userDataStorage.getIdentityUserId();
        this.logger.info(`User with id ${identityId} is successfully identified.`);
        this.userDataStorage.setOriginalUserId(originalId);
        this.userDataStorage.setIdentityUserId(identityId);
        this.fireUserChangedEvent(originalId, oldOriginalId, oldIdentityId);
    }
    fireUserChangedEvent(newUserOriginalId, oldUserOriginalId, oldUserIdentityId) {
        if (oldUserOriginalId != newUserOriginalId) {
            this.logger.verbose(`Current user has changed. Notifying ${this.userChangedListeners.length} listeners.`, { newUserOriginalId, oldUserOriginalId, oldUserIdentityId });
            this.userChangedListeners.forEach(listener => listener.onUserChanged(newUserOriginalId, oldUserOriginalId, oldUserIdentityId));
        }
    }
}
exports.UserControllerImpl = UserControllerImpl;
