"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesControllerImpl = void 0;
class PurchasesControllerImpl {
    constructor(purchasesService, userDataStorage, logger) {
        this.purchasesService = purchasesService;
        this.userDataStorage = userDataStorage;
        this.logger = logger;
    }
    async sendStripePurchase(data) {
        try {
            const userId = this.userDataStorage.requireOriginalUserId();
            this.logger.verbose('Sending Stripe purchase', { userId, data });
            const userPurchase = await this.purchasesService.sendStripePurchase(userId, data);
            this.logger.info('Successfully sent the Stripe purchase', userPurchase);
            return userPurchase;
        }
        catch (error) {
            this.logger.error('Failed to send the Stripe purchase', error);
            throw error;
        }
    }
}
exports.PurchasesControllerImpl = PurchasesControllerImpl;
