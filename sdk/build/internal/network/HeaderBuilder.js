"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderBuilderImpl = void 0;
const types_1 = require("./types");
const constants_1 = require("./constants");
class HeaderBuilderImpl {
    constructor(primaryConfigProvider, environmentProvider, userDataProvider) {
        this.primaryConfigProvider = primaryConfigProvider;
        this.environmentProvider = environmentProvider;
        this.userDataProvider = userDataProvider;
    }
    buildCommonHeaders() {
        var _a;
        const baseProjectKey = this.primaryConfigProvider.getPrimaryConfig().projectKey;
        const projectKey = this.environmentProvider.isSandbox() ? constants_1.DEBUG_MODE_PREFIX + baseProjectKey : baseProjectKey;
        const bearer = 'Bearer ' + projectKey;
        return {
            [types_1.ApiHeader.Authorization]: bearer,
            [types_1.ApiHeader.Platform]: constants_1.PLATFORM_FOR_API,
            [types_1.ApiHeader.PlatformVersion]: this.primaryConfigProvider.getPrimaryConfig().sdkVersion,
            [types_1.ApiHeader.UserID]: (_a = this.userDataProvider.getOriginalUserId()) !== null && _a !== void 0 ? _a : '',
        };
    }
}
exports.HeaderBuilderImpl = HeaderBuilderImpl;
