"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestConfiguratorImpl = void 0;
const types_1 = require("./types");
class RequestConfiguratorImpl {
    constructor(headerBuilder, baseUrl, primaryConfigProvider, userDataProvider) {
        this.headerBuilder = headerBuilder;
        this.baseUrl = baseUrl;
        this.primaryConfigProvider = primaryConfigProvider;
        this.userDataProvider = userDataProvider;
    }
    configureUserRequest(id) {
        const url = `${this.baseUrl}/${types_1.ApiEndpoint.Users}/${id}`;
        return this.configureRequest(url, types_1.RequestType.GET);
    }
    configureCreateUserRequest(id, environment) {
        const url = `${this.baseUrl}/${types_1.ApiEndpoint.Users}/${id}`;
        const body = { environment };
        return this.configureRequest(url, types_1.RequestType.POST, body);
    }
    configureUserPropertiesSendRequest(userId, properties) {
        const url = `${this.baseUrl}/${types_1.ApiEndpoint.Users}/${userId}/${types_1.ApiEndpoint.Properties}`;
        return this.configureRequest(url, types_1.RequestType.POST, properties);
    }
    configureUserPropertiesGetRequest(userId) {
        const url = `${this.baseUrl}/${types_1.ApiEndpoint.Users}/${userId}/${types_1.ApiEndpoint.Properties}`;
        return this.configureRequest(url, types_1.RequestType.GET);
    }
    configureCreateIdentityRequest(qonversionId, identityId) {
        const url = `${this.baseUrl}/${types_1.ApiEndpoint.Identity}/${identityId}`;
        const body = { user_id: qonversionId };
        return this.configureRequest(url, types_1.RequestType.POST, body);
    }
    configureIdentityRequest(identityId) {
        const url = `${this.baseUrl}/${types_1.ApiEndpoint.Identity}/${identityId}`;
        return this.configureRequest(url, types_1.RequestType.GET);
    }
    configureEntitlementsRequest(userId) {
        const url = `${this.baseUrl}/${types_1.ApiEndpoint.Users}/${userId}/entitlements`;
        return this.configureRequest(url, types_1.RequestType.GET);
    }
    configureStripePurchaseRequest(userId, data) {
        const url = `${this.baseUrl}/${types_1.ApiEndpoint.Users}/${userId}/purchases`;
        const body = {
            price: data.price,
            currency: data.currency,
            stripe_store_data: {
                subscription_id: data.subscriptionId,
                product_id: data.productId,
            },
            purchased: data.purchased,
        };
        return this.configureRequest(url, types_1.RequestType.POST, body);
    }
    configureRequest(url, type, body, additionalHeaders) {
        let headers = this.headerBuilder.buildCommonHeaders();
        if (additionalHeaders) {
            headers = Object.assign(Object.assign({}, headers), additionalHeaders);
        }
        return {
            url,
            headers,
            type,
            body,
        };
    }
}
exports.RequestConfiguratorImpl = RequestConfiguratorImpl;
