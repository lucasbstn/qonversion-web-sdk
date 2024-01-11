"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdGeneratorImpl = void 0;
const uuid_1 = require("uuid");
const constants_1 = require("./constants");
class UserIdGeneratorImpl {
    generate() {
        const uuid = (0, uuid_1.v4)().replace(/-/g, '');
        return `${constants_1.USER_ID_PREFIX}${constants_1.USER_ID_SEPARATOR}${uuid}`;
    }
}
exports.UserIdGeneratorImpl = UserIdGeneratorImpl;
