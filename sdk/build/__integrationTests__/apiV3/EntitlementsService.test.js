"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const apiV3Utils_1 = require("../apiV3Utils");
const utils_1 = require("../utils");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
const network_1 = require("../../internal/network");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// noinspection JSConstantReassignment
global.localStorage = {
    getItem: jest.fn(),
};
describe('entitlements tests', function () {
    const dependenciesAssembly = (0, utils_1.getDependencyAssembly)();
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
            const entitlementResponse = await (0, apiV3Utils_1.executeGrantEntitlementsRequest)(network_1.API_URL, constants_1.PRIVATE_TOKEN_FOR_TESTS, userId, entitlementId, expires);
            const entitlement = await entitlementResponse.json();
            // when
            const res = await entitlementsService.getEntitlements(userId);
            // then
            expect(res).toEqual([entitlement]);
        });
        it('get entitlements for non-existent user', async () => {
            // given
            const userId = 'testNonExistentUserId' + Date.now();
            // when and then
            await (0, utils_1.expectQonversionErrorAsync)(QonversionErrorCode_1.QonversionErrorCode.UserNotFound, 'Qonversion user not found. User id: ' + userId, async () => {
                await entitlementsService.getEntitlements(userId);
            });
        });
    });
});
