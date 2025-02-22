"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const apiV3Utils_1 = require("../apiV3Utils");
const Entitlement_1 = require("../../dto/Entitlement");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// noinspection JSConstantReassignment
global.localStorage = {
    getItem: jest.fn(),
};
describe('Direct API tests', function () {
    const dependenciesAssembly = (0, utils_1.getDependencyAssembly)({ apiUrl: constants_1.AEGIS_URL });
    const userService = dependenciesAssembly.userService();
    describe('Grant entitlements', function () {
        it('grant entitlement', async () => {
            // given
            const userId = 'testGrantEntitlementUid' + Date.now();
            await userService.createUser(userId);
            const entitlementId = 'Test Permission';
            const expires = (0, utils_1.getCurrentTs)() + 10000;
            const expRes = {
                active: true,
                expires,
                id: entitlementId,
                source: Entitlement_1.EntitlementSource.Manual,
                started: 0,
            };
            const requestStartTs = (0, utils_1.getCurrentTs)();
            // when
            const response = await (0, apiV3Utils_1.executeGrantEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PRIVATE_TOKEN_FOR_TESTS, userId, entitlementId, expires);
            const requestEndTs = (0, utils_1.getCurrentTs)();
            const responseBody = await response.json();
            // then
            expect(response.status).toBe(200);
            expect(responseBody.started).toBeGreaterThanOrEqual(requestStartTs - constants_1.TS_EPSILON);
            expect(responseBody.started).toBeLessThanOrEqual(requestEndTs + constants_1.TS_EPSILON);
            expRes.started = responseBody.started;
            expect(responseBody).toEqual(expRes);
        });
        it('grant entitlement twice', async () => {
            // given
            const userId = 'testGrantEntitlementUid' + Date.now();
            await userService.createUser(userId);
            const entitlementId = 'Test Permission';
            const expiresOld = (0, utils_1.getCurrentTs)() + 1000;
            await (0, apiV3Utils_1.executeGrantEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PRIVATE_TOKEN_FOR_TESTS, userId, entitlementId, expiresOld);
            const expiresNew = (0, utils_1.getCurrentTs)() + 10000;
            const expRes = {
                active: true,
                expires: expiresNew,
                id: entitlementId,
                source: Entitlement_1.EntitlementSource.Manual,
                started: 0,
            };
            const requestStartTs = (0, utils_1.getCurrentTs)();
            // when
            const response = await (0, apiV3Utils_1.executeGrantEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PRIVATE_TOKEN_FOR_TESTS, userId, entitlementId, expiresNew);
            const requestEndTs = (0, utils_1.getCurrentTs)();
            const responseBody = await response.json();
            // then
            expect(response.status).toBe(200);
            expect(responseBody.started).toBeGreaterThanOrEqual(requestStartTs - constants_1.TS_EPSILON);
            expect(responseBody.started).toBeLessThanOrEqual(requestEndTs + constants_1.TS_EPSILON);
            expRes.started = responseBody.started;
            expect(responseBody).toEqual(expRes);
        });
        it('grant entitlement with wrong expires', async () => {
            // given
            const userId = 'testGrantEntitlementUid' + Date.now();
            await userService.createUser(userId);
            const entitlementId = 'Test Permission';
            const expires = (0, utils_1.getCurrentTs)() - 10000;
            const expError = {
                code: 'invalid_entitlement_data',
                message: 'Invalid expires at value has been provided, should be in unix timestamp format in seconds in future',
                type: 'request',
            };
            // when
            const response = await (0, apiV3Utils_1.executeGrantEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PRIVATE_TOKEN_FOR_TESTS, userId, entitlementId, expires);
            const responseBody = await response.json();
            // then
            expect(response.status).toBe(400);
            expect(responseBody.error).toEqual(expError);
        });
        it('grant entitlement with wrong token', async () => {
            // given
            const userId = 'testGrantEntitlementUid' + Date.now();
            await userService.createUser(userId);
            const entitlementId = 'Test Permission';
            const expires = (0, utils_1.getCurrentTs)() + 10000;
            const expError = {
                code: 'control_unauthorized',
                message: 'Authorization error: project not found',
                type: 'request',
            };
            // when
            const response = await (0, apiV3Utils_1.executeGrantEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PROJECT_KEY_FOR_TESTS, userId, entitlementId, expires);
            const responseBody = await response.json();
            // then
            expect(response.status).toBe(400);
            expect(responseBody.error).toEqual(expError);
        });
        it('grant entitlement for non-existent user', async () => {
            // given
            const userId = 'testNonExistentUid' + Date.now();
            const entitlementId = 'Non existent entitlement';
            const expires = (0, utils_1.getCurrentTs)() + 10000;
            const expRes = {
                active: true,
                expires,
                id: entitlementId,
                source: Entitlement_1.EntitlementSource.Manual,
                started: 0,
            };
            const requestStartTs = (0, utils_1.getCurrentTs)();
            // when
            const response = await (0, apiV3Utils_1.executeGrantEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PRIVATE_TOKEN_FOR_TESTS, userId, entitlementId, expires);
            const requestEndTs = (0, utils_1.getCurrentTs)();
            const responseBody = await response.json();
            // then
            expect(response.status).toBe(200);
            expect(responseBody.started).toBeGreaterThanOrEqual(requestStartTs - constants_1.TS_EPSILON);
            expect(responseBody.started).toBeLessThanOrEqual(requestEndTs + constants_1.TS_EPSILON);
            expRes.started = responseBody.started;
            expect(responseBody).toEqual(expRes);
        });
    });
    describe('Revoke entitlements', function () {
        it('revoke existing entitlement', async () => {
            // given
            const userId = 'testGrantEntitlementUid' + Date.now();
            await userService.createUser(userId);
            const entitlementId = 'Test Permission';
            const expires = (0, utils_1.getCurrentTs)() + 10000;
            await (0, apiV3Utils_1.executeGrantEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PRIVATE_TOKEN_FOR_TESTS, userId, entitlementId, expires);
            // when
            const response = await (0, apiV3Utils_1.executeRevokeEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PRIVATE_TOKEN_FOR_TESTS, userId, entitlementId);
            // then
            expect(response.status).toBe(200);
        });
        it('revoke non-existent entitlement', async () => {
            // given
            const userId = 'testGrantEntitlementUid' + Date.now();
            await userService.createUser(userId);
            const entitlementId = 'Test Permission';
            const expError = {
                code: 'invalid_entitlement_data',
                message: 'Invalid entitlement uid, no such entitlement found',
                type: 'request',
            };
            // when
            const response = await (0, apiV3Utils_1.executeRevokeEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PRIVATE_TOKEN_FOR_TESTS, userId, entitlementId);
            const responseBody = await response.json();
            // then
            expect(response.status).toBe(400);
            expect(responseBody.error).toEqual(expError);
        });
        it('revoke entitlement with non-existent id', async () => {
            // given
            const userId = 'testGrantEntitlementUid' + Date.now();
            await userService.createUser(userId);
            const entitlementId = 'Non-existent entitlement id';
            const expError = {
                code: 'invalid_entitlement_data',
                message: 'Invalid entitlement uid, no such entitlement found',
                type: 'request',
            };
            // when
            const response = await (0, apiV3Utils_1.executeRevokeEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PRIVATE_TOKEN_FOR_TESTS, userId, entitlementId);
            const responseBody = await response.json();
            // then
            expect(response.status).toBe(400);
            expect(responseBody.error).toEqual(expError);
        });
        it('revoke entitlement with wrong token', async () => {
            // given
            const userId = 'testGrantEntitlementUid' + Date.now();
            await userService.createUser(userId);
            const entitlementId = 'Test Permission';
            const expError = {
                code: 'control_unauthorized',
                message: 'Authorization error: project not found',
                type: 'request',
            };
            // when
            const response = await (0, apiV3Utils_1.executeRevokeEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PROJECT_KEY_FOR_TESTS, userId, entitlementId);
            const responseBody = await response.json();
            // then
            expect(response.status).toBe(400);
            expect(responseBody.error).toEqual(expError);
        });
    });
});
