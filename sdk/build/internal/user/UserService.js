"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceImpl = void 0;
const QonversionError_1 = require("../../exception/QonversionError");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
const constants_1 = require("../network/constants");
const objectUtils_1 = require("../utils/objectUtils");
class UserServiceImpl {
    constructor(primaryConfigProvider, requestConfigurator, apiInteractor) {
        this.primaryConfigProvider = primaryConfigProvider;
        this.requestConfigurator = requestConfigurator;
        this.apiInteractor = apiInteractor;
    }
    async createUser(id) {
        const environment = this.primaryConfigProvider.getPrimaryConfig().environment;
        const request = this.requestConfigurator.configureCreateUserRequest(id, environment);
        const response = await this.apiInteractor.execute(request);
        if (response.isSuccess) {
            return (0, objectUtils_1.camelCaseKeys)(response.data);
        }
        const errorMessage = `Response code ${response.code}, message: ${response.message}`;
        throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.BackendError, errorMessage);
    }
    async getUser(id) {
        const request = this.requestConfigurator.configureUserRequest(id);
        const response = await this.apiInteractor.execute(request);
        if (response.isSuccess) {
            return (0, objectUtils_1.camelCaseKeys)(response.data);
        }
        if (response.code == constants_1.HTTP_CODE_NOT_FOUND) {
            throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.UserNotFound, `Id: ${id}`);
        }
        const errorMessage = `Response code ${response.code}, message: ${response.message}`;
        throw new QonversionError_1.QonversionError(QonversionErrorCode_1.QonversionErrorCode.BackendError, errorMessage);
    }
}
exports.UserServiceImpl = UserServiceImpl;
