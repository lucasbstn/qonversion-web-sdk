"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitlementsServiceImpl = void 0;
const objectUtils_1 = require("../utils/objectUtils");
const QonversionError_1 = require("../../exception/QonversionError");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
const constants_1 = require("../network/constants");
class EntitlementsServiceImpl {
    constructor(requestConfigurator, apiInteractor) {
        this.requestConfigurator = requestConfigurator;
        this.apiInteractor = apiInteractor;
    }
    async getEntitlements(userId) {
        const request = this.requestConfigurator.configureEntitlementsRequest(userId);
        const response = await this.apiInteractor.execute(request);
        if (response.isSuccess) {
            return (0, objectUtils_1.camelCaseKeys)(response.data.data);
        }
        if (response.code == constants_1.HTTP_CODE_NOT_FOUND) {
            throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.UserNotFound, `User id: ${userId}`);
        }
        const errorMessage = `Response code ${response.code}, message: ${response.message}`;
        throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.BackendError, errorMessage);
    }
}
exports.EntitlementsServiceImpl = EntitlementsServiceImpl;
