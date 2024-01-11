import { UserProperty } from './UserProperty';
import { UserPropertyKey } from './UserPropertyKey';
export declare class UserProperties {
    /**
     * List of all user properties.
     */
    properties: UserProperty[];
    /**
     * List of user properties, set for the Qonversion defined keys.
     * This is a subset of all {@link properties} list.
     * See {@link QonversionInstance.setUserProperty}.
     */
    definedProperties: UserProperty[];
    /**
     * List of user properties, set for custom keys.
     * This is a subset of all {@link properties} list.
     * See {@link QonversionInstance.setCustomUserProperty}.
     */
    customProperties: UserProperty[];
    /**
     * Map of all user properties.
     * This is a flattened version of the {@link properties} list as a key-value map.
     */
    flatPropertiesMap: Map<string, string>;
    /**
     * Map of user properties, set for the Qonversion defined keys.
     * This is a flattened version of the {@link definedProperties} list as a key-value map.
     * See {@link QonversionInstance.setUserProperty}.
     */
    flatDefinedPropertiesMap: Map<UserPropertyKey, string>;
    /**
     * Map of user properties, set for custom keys.
     * This is a flattened version of the {@link customProperties} list as a key-value map.
     * See {@link QonversionInstance.setCustomUserProperty}.
     */
    flatCustomPropertiesMap: Map<string, string>;
    constructor(properties: UserProperty[]);
    /**
     * Searches for a property with the given property {@link key} in all properties list.
     */
    getProperty(key: string): UserProperty | undefined;
    /**
     * Searches for a property with the given Qonversion defined property {@link key}
     * in defined properties list.
     */
    getDefinedProperty(key: UserPropertyKey): UserProperty | undefined;
}
