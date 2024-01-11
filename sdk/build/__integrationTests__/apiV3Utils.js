"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeRevokeEntitlementsRequest = exports.executeGrantEntitlementsRequest = void 0;
const network_1 = require("../internal/network");
const executeGrantEntitlementsRequest = async (apiUrl, accessToken, userId, entitlementId, expires) => {
    return await fetch(encodeURI(`${apiUrl}/v3/users/${userId}/entitlements`), {
        method: 'POST',
        headers: {
            [network_1.ApiHeader.Authorization]: 'Bearer ' + accessToken,
            [network_1.ApiHeader.ContentType]: 'application/json',
            [network_1.ApiHeader.Accept]: 'application/json',
        },
        body: JSON.stringify({
            id: entitlementId,
            expires,
        }),
    });
};
exports.executeGrantEntitlementsRequest = executeGrantEntitlementsRequest;
const executeRevokeEntitlementsRequest = async (apiUrl, accessToken, userId, entitlementId) => {
    return await fetch(encodeURI(`${apiUrl}/v3/users/${userId}/entitlements/${entitlementId}`), {
        method: 'DELETE',
        headers: {
            [network_1.ApiHeader.Authorization]: 'Bearer ' + accessToken,
            [network_1.ApiHeader.ContentType]: 'application/json',
            [network_1.ApiHeader.Accept]: 'application/json',
        },
    });
};
exports.executeRevokeEntitlementsRequest = executeRevokeEntitlementsRequest;
