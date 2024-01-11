"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPropertiesStorageImpl = void 0;
class UserPropertiesStorageImpl {
    constructor(localStorage, key) {
        var _a;
        this.properties = {};
        this.localStorage = localStorage;
        this.key = key;
        this.properties = (_a = localStorage.getObject(this.key)) !== null && _a !== void 0 ? _a : {};
    }
    add(properties) {
        this.properties = Object.assign(Object.assign({}, this.properties), properties);
        this.saveProperties();
    }
    addOne(key, value) {
        this.properties[key] = value;
        this.saveProperties();
    }
    delete(properties) {
        Object.keys(properties).forEach(key => {
            if (this.properties[key] == properties[key]) {
                delete this.properties[key];
            }
        });
        this.saveProperties();
    }
    deleteOne(key, value) {
        if (this.properties[key] == value) {
            delete this.properties[key];
            this.saveProperties();
        }
    }
    clear() {
        this.properties = {};
        this.saveProperties();
    }
    getProperties() {
        return this.properties;
    }
    saveProperties() {
        this.localStorage.putObject(this.key, this.properties);
    }
}
exports.UserPropertiesStorageImpl = UserPropertiesStorageImpl;
