export declare type Entitlement = {
    id: string;
    active: boolean;
    started: number;
    expires?: number | null;
    source: EntitlementSource;
    product?: Product;
};
export declare type Product = {
    productId: string;
    subscription?: Subscription;
};
export declare type Subscription = {
    renewState: RenewState;
    currentPeriodType: PeriodType;
};
export declare enum RenewState {
    WillRenew = "will_renew",
    Canceled = "canceled",
    BillingIssue = "billing_issue"
}
export declare enum PeriodType {
    Normal = "normal",
    Trial = "trial",
    Intro = "intro"
}
export declare enum EntitlementSource {
    Unknown = "unknown",
    AppStore = "appstore",
    PlayStore = "playstore",
    Stripe = "stripe",
    Manual = "manual"
}
