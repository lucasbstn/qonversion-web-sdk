"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPropertiesServiceImpl = void 0;
const QonversionError_1 = require("../../exception/QonversionError");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
class UserPropertiesServiceImpl {
    constructor(requestConfigurator, apiInteractor) {
        this.requestConfigurator = requestConfigurator;
        this.apiInteractor = apiInteractor;
    }
    async sendProperties(userId, properties) {
        const propertiesList = Object.keys(properties).map(key => ({
            key,
            value: properties[key],
        }));
        const request = this.requestConfigurator.configureUserPropertiesSendRequest(userId, propertiesList);
        const response = await this.apiInteractor.execute(request);
        if (response.isSuccess) {
            return response.data;
        }
        const errorMessage = `Response code ${response.code}, message: ${response.message}`;
        throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.BackendError, errorMessage);
    }
    async getProperties(userId) {
        const request = this.requestConfigurator.configureUserPropertiesGetRequest(userId);
        const response = await this.apiInteractor.execute(request);
        if (response.isSuccess) {
            return response.data;
        }
        const errorMessage = `Response code ${response.code}, message: ${response.message}`;
        throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.BackendError, errorMessage);
    }
}
exports.UserPropertiesServiceImpl = UserPropertiesServiceImpl;
