"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProperty = void 0;
const propertyUtils_1 = require("../internal/utils/propertyUtils");
class UserProperty {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.definedKey = (0, propertyUtils_1.convertDefinedUserPropertyKey)(key);
    }
}
exports.UserProperty = UserProperty;
