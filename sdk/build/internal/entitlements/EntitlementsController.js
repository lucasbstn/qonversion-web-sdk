"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitlementsControllerImpl = void 0;
const QonversionError_1 = require("../../exception/QonversionError");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
class EntitlementsControllerImpl {
    constructor(userController, entitlementsService, userDataStorage, logger) {
        this.userController = userController;
        this.entitlementsService = entitlementsService;
        this.userDataStorage = userDataStorage;
        this.logger = logger;
    }
    async getEntitlements() {
        try {
            const userId = this.userDataStorage.requireOriginalUserId();
            this.logger.verbose('Requesting entitlements', { userId });
            const entitlements = await this.entitlementsService.getEntitlements(userId);
            this.logger.info('Successfully received entitlements', entitlements);
            return entitlements;
        }
        catch (error) {
            if (error instanceof QonversionError_1.QonversionError && error.code == QonversionErrorCode_1.QonversionErrorCode.UserNotFound) {
                try {
                    this.logger.verbose('User is not registered. Creating new one');
                    await this.userController.createUser();
                }
                catch (userCreationError) {
                    this.logger.error('Failed to create new user while requesting entitlements', userCreationError);
                }
                return [];
            }
            else {
                this.logger.error('Failed to request entitlements', error);
                throw error;
            }
        }
    }
}
exports.EntitlementsControllerImpl = EntitlementsControllerImpl;
