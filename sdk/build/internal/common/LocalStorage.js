"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageImpl = void 0;
class LocalStorageImpl {
    getInt(key) {
        const stringValue = this.getString(key);
        if (stringValue) {
            return Number.parseInt(stringValue);
        }
        return undefined;
    }
    getFloat(key) {
        const stringValue = this.getString(key);
        if (stringValue) {
            return Number.parseFloat(stringValue);
        }
        return undefined;
    }
    getString(key) {
        var _a;
        return (_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : undefined;
    }
    getObject(key) {
        const stringValue = this.getString(key);
        if (stringValue) {
            try {
                return JSON.parse(stringValue);
            }
            catch (e) {
                // do nothing.
            }
        }
        return undefined;
    }
    putObject(key, value) {
        try {
            const stringValue = JSON.stringify(value);
            this.putString(key, stringValue);
        }
        catch (e) {
            // do nothing.
        }
    }
    putNumber(key, value) {
        this.putString(key, value.toString());
    }
    putString(key, value) {
        localStorage.setItem(key, value);
    }
    remove(key) {
        localStorage.removeItem(key);
    }
}
exports.LocalStorageImpl = LocalStorageImpl;
