"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// noinspection JSConstantReassignment
global.localStorage = {
    getItem: jest.fn(),
};
describe('identities tests', function () {
    const dependenciesAssembly = (0, utils_1.getDependencyAssembly)();
    const userService = dependenciesAssembly.userService();
    const identityService = dependenciesAssembly.identityService();
    describe('POST identities', function () {
        it('create correct identity', async () => {
            // given
            const identityId = 'testCorrectIdentity' + Date.now();
            const userId = 'testCorrectIdentityUid' + Date.now();
            await userService.createUser(userId);
            // when
            const res = await identityService.createIdentity(userId, identityId);
            // then
            expect(res).toEqual(userId);
        });
        it('create same identity above existing', async () => {
            // given
            const identityId = 'testExistingIdentity' + Date.now();
            const userId = 'testCorrectIdentityUid' + Date.now();
            await userService.createUser(userId);
            await identityService.createIdentity(userId, identityId);
            // when and then
            await (0, utils_1.expectQonversionErrorAsync)(QonversionErrorCode_1.QonversionErrorCode.BackendError, 'Qonversion API returned an error. Response code 422, message: user already has identity', async () => {
                await identityService.createIdentity(userId, identityId);
            });
        });
        it('create different identity above existing', async () => {
            // given
            const identityId = 'testExistingIdentity' + Date.now();
            const userId = 'testCorrectIdentityUid' + Date.now();
            await userService.createUser(userId);
            await identityService.createIdentity(userId, identityId);
            // when and then
            await (0, utils_1.expectQonversionErrorAsync)(QonversionErrorCode_1.QonversionErrorCode.BackendError, 'Qonversion API returned an error. Response code 422, message: user already converted', async () => {
                await identityService.createIdentity(userId, identityId + 'another');
            });
        });
        it('create identity which was already used for another user', async () => {
            // given
            const identityId = 'testExistingIdentity' + Date.now();
            const identifierUserId = 'testIdentifiedUid' + Date.now();
            await userService.createUser(identifierUserId);
            await identityService.createIdentity(identifierUserId, identityId);
            const nonIdentifierUserId = 'testNonIdentifiedUid' + Date.now();
            await userService.createUser(nonIdentifierUserId);
            // when and then
            await (0, utils_1.expectQonversionErrorAsync)(QonversionErrorCode_1.QonversionErrorCode.BackendError, 'Qonversion API returned an error. Response code 422, message: identity already exists: it\'s linked to another user', async () => {
                await identityService.createIdentity(nonIdentifierUserId, identityId);
            });
        });
        it('create identity for non-existent user', async () => {
            // given
            const identityId = 'testIdentityForNonExistentUser' + Date.now();
            const nonExistentUserId = 'testNonExistentUid' + Date.now();
            // when and then
            await (0, utils_1.expectQonversionErrorAsync)(QonversionErrorCode_1.QonversionErrorCode.BackendError, 'Qonversion API returned an error. Response code 400, message: user not found', async () => {
                await identityService.createIdentity(nonExistentUserId, identityId);
            });
        });
    });
    describe('GET identities', function () {
        it('get existing identity', async () => {
            // given
            const identityId = 'testExistingIdentity' + Date.now();
            const userId = 'testExistingUid' + Date.now();
            await userService.createUser(userId);
            await identityService.createIdentity(userId, identityId);
            // when
            const res = await identityService.obtainIdentity(identityId);
            // then
            expect(res).toEqual(userId);
        });
        it('get non-existent identity', async () => {
            // given
            const identityId = 'testNonExistentIdentity' + Date.now();
            // when and then
            await (0, utils_1.expectQonversionErrorAsync)(QonversionErrorCode_1.QonversionErrorCode.IdentityNotFound, 'User with requested identity not found. Id: ' + identityId, async () => {
                await identityService.obtainIdentity(identityId);
            });
        });
    });
});
