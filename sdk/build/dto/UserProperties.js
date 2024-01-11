"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProperties = void 0;
const UserPropertyKey_1 = require("./UserPropertyKey");
class UserProperties {
    constructor(properties) {
        this.properties = properties;
        this.definedProperties = properties.filter(property => property.definedKey !== UserPropertyKey_1.UserPropertyKey.Custom);
        this.customProperties = properties.filter(property => property.definedKey === UserPropertyKey_1.UserPropertyKey.Custom);
        this.flatPropertiesMap = new Map();
        this.flatDefinedPropertiesMap = new Map();
        this.flatCustomPropertiesMap = new Map();
        properties.forEach(property => {
            this.flatPropertiesMap.set(property.key, property.value);
            if (property.definedKey == UserPropertyKey_1.UserPropertyKey.Custom) {
                this.flatCustomPropertiesMap.set(property.key, property.value);
            }
            else {
                this.flatDefinedPropertiesMap.set(property.definedKey, property.value);
            }
        });
    }
    /**
     * Searches for a property with the given property {@link key} in all properties list.
     */
    getProperty(key) {
        return this.properties.find(userProperty => userProperty.key == key);
    }
    /**
     * Searches for a property with the given Qonversion defined property {@link key}
     * in defined properties list.
     */
    getDefinedProperty(key) {
        return this.definedProperties.find(userProperty => userProperty.definedKey == key);
    }
}
exports.UserProperties = UserProperties;
