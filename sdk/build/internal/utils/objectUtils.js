"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeToCamelCase = exports.camelCaseObjectKeys = exports.camelCaseKeys = void 0;
const camelCaseKeys = value => {
    let convertedValue;
    if (Array.isArray(value)) {
        convertedValue = value.map(arrayValue => (0, exports.camelCaseKeys)(arrayValue));
    }
    else if (typeof value === 'object') {
        convertedValue = (0, exports.camelCaseObjectKeys)(value);
    }
    else {
        convertedValue = value;
    }
    return convertedValue;
};
exports.camelCaseKeys = camelCaseKeys;
const camelCaseObjectKeys = (obj) => {
    const keys = Object.keys(obj);
    const result = {};
    keys.forEach(key => {
        const value = obj[key];
        const camelcaseKey = (0, exports.snakeToCamelCase)(key);
        result[camelcaseKey] = (0, exports.camelCaseKeys)(value);
    });
    return result;
};
exports.camelCaseObjectKeys = camelCaseObjectKeys;
const snakeToCamelCase = str => str.replace(/([-_][a-zA-Z])/g, group => group
    .toUpperCase()
    .replace('-', '')
    .replace('_', ''));
exports.snakeToCamelCase = snakeToCamelCase;
