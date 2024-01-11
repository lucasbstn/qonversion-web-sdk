"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPropertiesBuilder = void 0;
const UserPropertyKey_1 = require("./dto/UserPropertyKey");
/**
 * This builder class can be used to generate a map of user properties
 * which can be then provided to {@link QonversionInstance.setUserProperties}.
 *
 * It consumes both Qonversion defined and custom properties.
 *
 * Setting any property twice will override the previous value.
 */
class UserPropertiesBuilder {
    constructor() {
        this.properties = {};
    }
    /**
     * Set current user's name.
     * @param name name to set to the current user
     * @return builder instance for chain calls
     */
    setName(name) {
        this.properties[UserPropertyKey_1.UserPropertyKey.Name] = name;
        return this;
    }
    /**
     * Set custom user id. It can be an identifier used on your backend
     * to link the current Qonversion user with your one.
     * @param customUserId unique user id
     * @return builder instance for chain calls
     */
    setCustomUserId(customUserId) {
        this.properties[UserPropertyKey_1.UserPropertyKey.CustomUserId] = customUserId;
        return this;
    }
    /**
     * Set current user email address.
     * @param email email address to set to the current user
     * @return builder instance for chain calls
     */
    setEmail(email) {
        this.properties[UserPropertyKey_1.UserPropertyKey.Email] = email;
        return this;
    }
    /**
     * Set Kochava unique device id.
     * @param deviceId Kochava unique device id
     * @return builder instance for chain calls
     */
    setKochavaDeviceId(deviceId) {
        this.properties[UserPropertyKey_1.UserPropertyKey.KochavaDeviceId] = deviceId;
        return this;
    }
    /**
     * Set AppsFlyer user id. Can be used to cross-reference your in-house data
     * with AppsFlyer attribution data.
     * @param userId Appsflyer user id
     * @return builder instance for chain calls
     */
    setAppsFlyerUserId(userId) {
        this.properties[UserPropertyKey_1.UserPropertyKey.AppsFlyerUserId] = userId;
        return this;
    }
    /**
     * Set Adjust advertising id.
     * @param advertisingId Adjust advertising id
     * @return builder instance for chain calls
     */
    setAdjustAdvertisingId(advertisingId) {
        this.properties[UserPropertyKey_1.UserPropertyKey.AdjustAdId] = advertisingId;
        return this;
    }
    /**
     * Set Facebook attribution - mobile Cookie from the user's device.
     * @param facebookAttribution Facebook attribution string
     * @return builder instance for chain calls
     */
    setFacebookAttribution(facebookAttribution) {
        this.properties[UserPropertyKey_1.UserPropertyKey.FacebookAttribution] = facebookAttribution;
        return this;
    }
    /**
     * Set Firebase application id.
     * @param firebaseAppInstanceId firebase app id
     * @return builder instance for chain calls
     */
    setFirebaseAppInstanceId(firebaseAppInstanceId) {
        this.properties[UserPropertyKey_1.UserPropertyKey.FirebaseAppInstanceId] = firebaseAppInstanceId;
        return this;
    }
    /**
     * Set Android app set id.
     * @param appSetId app set id
     * @return builder instance for chain calls
     */
    setAppSetId(appSetId) {
        this.properties[UserPropertyKey_1.UserPropertyKey.AppSetId] = appSetId;
        return this;
    }
    /**
     * Set iOS advertising id.
     * @param advertisingId advertising id
     * @return builder instance for chain calls
     */
    setAdvertisingId(advertisingId) {
        this.properties[UserPropertyKey_1.UserPropertyKey.AdvertisingId] = advertisingId;
        return this;
    }
    /**
     * Set a user property with a custom key different from defined ones.
     *
     * Can be called multiple times for different keys.
     * @param key nonempty key for user property consisting of letters A-Za-z, numbers, and symbols _.:-
     * @param value nonempty value for the given property
     */
    setCustomUserProperty(key, value) {
        this.properties[key] = value;
        return this;
    }
    /**
     * Build final properties map with all the properties provided to the builder before.
     * @return properties map to provide to [Qonversion.setUserProperties] method.
     */
    build() {
        return this.properties;
    }
}
exports.UserPropertiesBuilder = UserPropertiesBuilder;
