"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceDecorator = void 0;
const QonversionError_1 = require("../../exception/QonversionError");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
class UserServiceDecorator {
    constructor(userService) {
        this.userLoadingPromise = undefined;
        this.userService = userService;
    }
    async createUser(id) {
        return await this.userService.createUser(id);
    }
    async getUser(id) {
        if (this.userLoadingPromise) {
            return await this.userLoadingPromise;
        }
        this.userLoadingPromise = this.loadOrCreateUser(id);
        return await this.userLoadingPromise;
    }
    async loadOrCreateUser(id) {
        try {
            return await this.userService.getUser(id);
        }
        catch (e) {
            if (e instanceof QonversionError_1.QonversionError && e.code == QonversionErrorCode_1.QonversionErrorCode.UserNotFound) {
                return await this.userService.createUser(id);
            }
            throw e;
        }
    }
}
exports.UserServiceDecorator = UserServiceDecorator;
