"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityServiceImpl = void 0;
const QonversionError_1 = require("../../exception/QonversionError");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
const constants_1 = require("../network/constants");
class IdentityServiceImpl {
    constructor(requestConfigurator, apiInteractor) {
        this.requestConfigurator = requestConfigurator;
        this.apiInteractor = apiInteractor;
    }
    async createIdentity(qonversionId, identityId) {
        const request = this.requestConfigurator.configureCreateIdentityRequest(qonversionId, identityId);
        const response = await this.apiInteractor.execute(request);
        if (response.isSuccess) {
            return response.data.user_id;
        }
        const errorMessage = `Response code ${response.code}, message: ${response.message}`;
        throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.BackendError, errorMessage);
    }
    async obtainIdentity(identityId) {
        const request = this.requestConfigurator.configureIdentityRequest(identityId);
        const response = await this.apiInteractor.execute(request);
        if (response.isSuccess) {
            return response.data.user_id;
        }
        if (response.code == constants_1.HTTP_CODE_NOT_FOUND) {
            throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.IdentityNotFound, `Id: ${identityId}`);
        }
        const errorMessage = `Response code ${response.code}, message: ${response.message}`;
        throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.BackendError, errorMessage);
    }
}
exports.IdentityServiceImpl = IdentityServiceImpl;
