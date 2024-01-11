"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDefinedUserPropertyKey = void 0;
const UserPropertyKey_1 = require("../../dto/UserPropertyKey");
const convertDefinedUserPropertyKey = (sourceKey) => {
    var _a;
    return (_a = Object.values(UserPropertyKey_1.UserPropertyKey).find(userPropertyKey => userPropertyKey == sourceKey)) !== null && _a !== void 0 ? _a : UserPropertyKey_1.UserPropertyKey.Custom;
};
exports.convertDefinedUserPropertyKey = convertDefinedUserPropertyKey;
