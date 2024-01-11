"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Environment_1 = require("../../dto/Environment");
const utils_1 = require("../utils");
const QonversionErrorCode_1 = require("../../exception/QonversionErrorCode");
const constants_1 = require("../constants");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// noinspection JSConstantReassignment
global.localStorage = {
    getItem: jest.fn(),
};
describe('users tests', function () {
    const dependenciesAssembly = (0, utils_1.getDependencyAssembly)();
    const userService = dependenciesAssembly.userService();
    describe('POST users', function () {
        it('create production user', async () => {
            // given
            const testsStartTs = (0, utils_1.getCurrentTs)();
            const testUserId = 'testProd' + testsStartTs;
            const expectedUser = {
                created: 0,
                environment: Environment_1.Environment.Production,
                id: testUserId,
                identityId: undefined,
            };
            // when
            const res = await userService.createUser(testUserId);
            const requestEndTs = (0, utils_1.getCurrentTs)();
            // then
            expect(res.created).toBeGreaterThanOrEqual(testsStartTs - constants_1.TS_EPSILON);
            expect(res.created).toBeLessThanOrEqual(requestEndTs + constants_1.TS_EPSILON);
            expectedUser.created = res.created;
            expect(res).toEqual(expectedUser);
        });
        it('create existing user', async () => {
            // given
            const testsStartTs = (0, utils_1.getCurrentTs)();
            const testUserId = 'testExistingUser' + testsStartTs;
            await userService.createUser(testUserId);
            // when and then
            await (0, utils_1.expectQonversionErrorAsync)(QonversionErrorCode_1.QonversionErrorCode.BackendError, 'Qonversion API returned an error. Response code 422, message: User with given uid already exists', async () => {
                await userService.createUser(testUserId);
            });
        });
        it('create sandbox user', async () => {
            // given
            const dependenciesAssembly = (0, utils_1.getDependencyAssembly)({ environment: Environment_1.Environment.Sandbox });
            const userService = dependenciesAssembly.userService();
            const testsStartTs = (0, utils_1.getCurrentTs)();
            const testUserId = 'testSandbox' + testsStartTs;
            const expectedUser = {
                created: 0,
                environment: Environment_1.Environment.Sandbox,
                id: testUserId,
                identityId: undefined,
            };
            // when
            const res = await userService.createUser(testUserId);
            const requestEndTs = (0, utils_1.getCurrentTs)();
            // then
            expect(res.created).toBeGreaterThanOrEqual(testsStartTs - constants_1.TS_EPSILON);
            expect(res.created).toBeLessThanOrEqual(requestEndTs + constants_1.TS_EPSILON);
            expectedUser.created = res.created;
            expect(res).toEqual(expectedUser);
        });
    });
    describe('GET users', function () {
        it('get existing user', async () => {
            // given
            const testUserId = 'testGet' + Date.now();
            const expUser = await userService.createUser(testUserId);
            // when
            const res = await userService.getUser(testUserId);
            // then
            expect(res).toEqual(expUser);
        });
        it('get non-existent user', async () => {
            // given
            const nonExistentUserId = 'testNonExistent' + Date.now();
            // when and then
            await (0, utils_1.expectQonversionErrorAsync)(QonversionErrorCode_1.QonversionErrorCode.UserNotFound, 'Qonversion user not found. Id: ' + nonExistentUserId, async () => {
                await userService.getUser(nonExistentUserId);
            });
        });
    });
});
