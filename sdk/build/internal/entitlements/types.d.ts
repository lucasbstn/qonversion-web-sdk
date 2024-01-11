import { Entitlement, PeriodType, RenewState } from '../../dto/Entitlement';
export declare type EntitlementsService = {
    getEntitlements: (userId: string) => Promise<Entitlement[]>;
};
export declare type EntitlementsController = {
    getEntitlements: () => Promise<Entitlement[]>;
};
export declare type EntitlementsResponse = {
    object: 'list';
    data: EntitlementApi[];
};
export declare type EntitlementApi = {
    id: string;
    active: boolean;
    started: number;
    expires: number;
    source: string;
    product?: ProductApi;
};
export declare type ProductApi = {
    product_id: string;
    subscription?: SubscriptionApi;
};
export declare type SubscriptionApi = {
    renew_state: RenewState;
    current_period_type: PeriodType;
};
