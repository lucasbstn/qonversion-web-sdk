"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Environment_1 = require("../../dto/Environment");
const utils_1 = require("../utils");
const constants_1 = require("../constants");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// noinspection JSConstantReassignment
global.localStorage = {
    getItem: jest.fn(),
};
describe('users tests', function () {
    const dependenciesAssembly = (0, utils_1.getDependencyAssembly)({ apiUrl: constants_1.AEGIS_URL });
    const userService = dependenciesAssembly.userService();
    describe('POST users', function () {
        it('create production user', async () => {
            // given
            const testUserId = 'testProd' + Date.now();
            const expectedUser = {
                created: 0,
                environment: Environment_1.Environment.Production,
                id: testUserId,
                identityId: undefined,
            };
            // when
            const res = await userService.createUser(testUserId);
            // then
            expect(res).toEqual(expectedUser);
        });
        it('create existing user', async () => {
            // given
            const testUserId = 'testExistingUser' + Date.now();
            await userService.createUser(testUserId);
            const expectedUser = {
                created: 0,
                environment: Environment_1.Environment.Production,
                id: testUserId,
                identityId: undefined,
            };
            // when
            const res = await userService.createUser(testUserId);
            // then
            expect(res).toEqual(expectedUser);
        });
        it('create sandbox user', async () => {
            // given
            const dependenciesAssembly = (0, utils_1.getDependencyAssembly)({
                environment: Environment_1.Environment.Sandbox,
                apiUrl: constants_1.AEGIS_URL,
            });
            const userService = dependenciesAssembly.userService();
            const testUserId = 'testSandbox' + Date.now();
            const expectedUser = {
                created: 0,
                environment: Environment_1.Environment.Sandbox,
                id: testUserId,
                identityId: undefined,
            };
            // when
            const res = await userService.createUser(testUserId);
            // then
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
            const expectedUser = {
                created: 0,
                environment: Environment_1.Environment.Production,
                id: nonExistentUserId,
                identityId: undefined,
            };
            // when
            const res = await userService.getUser(nonExistentUserId);
            // then
            expect(res).toEqual(expectedUser);
        });
    });
});
