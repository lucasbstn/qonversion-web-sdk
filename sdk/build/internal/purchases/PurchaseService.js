"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseServiceImpl = void 0;
const objectUtils_1 = require("../utils/objectUtils");
const QonversionError_1 = require("../../exception/QonversionError");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
class PurchaseServiceImpl {
    constructor(requestConfigurator, apiInteractor) {
        this.requestConfigurator = requestConfigurator;
        this.apiInteractor = apiInteractor;
    }
    async sendStripePurchase(userId, data) {
        const request = this.requestConfigurator.configureStripePurchaseRequest(userId, data);
        const response = await this.apiInteractor.execute(request);
        if (response.isSuccess) {
            return (0, objectUtils_1.camelCaseKeys)(response.data);
        }
        const errorMessage = `Response code ${response.code}, message: ${response.message}`;
        throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.BackendError, errorMessage);
    }
}
exports.PurchaseServiceImpl = PurchaseServiceImpl;
