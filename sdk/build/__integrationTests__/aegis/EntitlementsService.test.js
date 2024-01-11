"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const apiV3Utils_1 = require("../apiV3Utils");
const utils_1 = require("../utils");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// noinspection JSConstantReassignment
global.localStorage = {
    getItem: jest.fn(),
};
describe('entitlements tests', function () {
    const dependenciesAssembly = (0, utils_1.getDependencyAssembly)({ apiUrl: constants_1.AEGIS_URL });
    const userService = dependenciesAssembly.userService();
    const entitlementsService = dependenciesAssembly.entitlementsService();
    describe('GET entitlements', function () {
        it('get entitlements for new user', async () => {
            // given
            const userId = 'testEntitlementUserId' + Date.now();
            await userService.createUser(userId);
            // when
            const res = await entitlementsService.getEntitlements(userId);
            // then
            expect(res).toEqual([]);
        });
        it('get entitlements for user with entitlements', async () => {
            // given
            const userId = 'testEntitlementUserId' + Date.now();
            await userService.createUser(userId);
            const entitlementId = 'Test Permission';
            const expires = (0, utils_1.getCurrentTs)() + 10000;
            const entitlementResponse = await (0, apiV3Utils_1.executeGrantEntitlementsRequest)(constants_1.AEGIS_URL, constants_1.PRIVATE_TOKEN_FOR_TESTS, userId, entitlementId, expires);
            const entitlement = await entitlementResponse.json();
            // when
            const res = await entitlementsService.getEntitlements(userId);
            // then
            expect(res).toEqual([entitlement]);
        });
        it('get entitlements for non-existent user', async () => {
            // given
            const userId = 'testNonExistentUserId' + Date.now();
            // when
            const res = await entitlementsService.getEntitlements(userId);
            // then
            expect(res).toEqual([]);
        });
    });
});
