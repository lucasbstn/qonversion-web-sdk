/**
 * This builder class can be used to generate a map of user properties
 * which can be then provided to {@link QonversionInstance.setUserProperties}.
 *
 * It consumes both Qonversion defined and custom properties.
 *
 * Setting any property twice will override the previous value.
 */
export declare class UserPropertiesBuilder {
    private properties;
    /**
     * Set current user's name.
     * @param name name to set to the current user
     * @return builder instance for chain calls
     */
    setName(name: string): UserPropertiesBuilder;
    /**
     * Set custom user id. It can be an identifier used on your backend
     * to link the current Qonversion user with your one.
     * @param customUserId unique user id
     * @return builder instance for chain calls
     */
    setCustomUserId(customUserId: string): UserPropertiesBuilder;
    /**
     * Set current user email address.
     * @param email email address to set to the current user
     * @return builder instance for chain calls
     */
    setEmail(email: string): UserPropertiesBuilder;
    /**
     * Set Kochava unique device id.
     * @param deviceId Kochava unique device id
     * @return builder instance for chain calls
     */
    setKochavaDeviceId(deviceId: string): UserPropertiesBuilder;
    /**
     * Set AppsFlyer user id. Can be used to cross-reference your in-house data
     * with AppsFlyer attribution data.
     * @param userId Appsflyer user id
     * @return builder instance for chain calls
     */
    setAppsFlyerUserId(userId: string): UserPropertiesBuilder;
    /**
     * Set Adjust advertising id.
     * @param advertisingId Adjust advertising id
     * @return builder instance for chain calls
     */
    setAdjustAdvertisingId(advertisingId: string): UserPropertiesBuilder;
    /**
     * Set Facebook attribution - mobile Cookie from the user's device.
     * @param facebookAttribution Facebook attribution string
     * @return builder instance for chain calls
     */
    setFacebookAttribution(facebookAttribution: string): UserPropertiesBuilder;
    /**
     * Set Firebase application id.
     * @param firebaseAppInstanceId firebase app id
     * @return builder instance for chain calls
     */
    setFirebaseAppInstanceId(firebaseAppInstanceId: string): UserPropertiesBuilder;
    /**
     * Set Android app set id.
     * @param appSetId app set id
     * @return builder instance for chain calls
     */
    setAppSetId(appSetId: string): UserPropertiesBuilder;
    /**
     * Set iOS advertising id.
     * @param advertisingId advertising id
     * @return builder instance for chain calls
     */
    setAdvertisingId(advertisingId: string): UserPropertiesBuilder;
    /**
     * Set a user property with a custom key different from defined ones.
     *
     * Can be called multiple times for different keys.
     * @param key nonempty key for user property consisting of letters A-Za-z, numbers, and symbols _.:-
     * @param value nonempty value for the given property
     */
    setCustomUserProperty(key: string, value: string): UserPropertiesBuilder;
    /**
     * Build final properties map with all the properties provided to the builder before.
     * @return properties map to provide to [Qonversion.setUserProperties] method.
     */
    build(): Record<string, string>;
}
