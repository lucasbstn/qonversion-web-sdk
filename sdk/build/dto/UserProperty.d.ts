import { UserPropertyKey } from './UserPropertyKey';
export declare class UserProperty {
    key: string;
    value: string;
    /**
     * {@link UserPropertyKey} used to set this property.
     * Returns {@link UserPropertyKey.Custom} for custom properties.
     */
    definedKey: UserPropertyKey;
    constructor(key: string, value: string);
}
