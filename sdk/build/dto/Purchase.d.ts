export declare type PurchaseCoreData = {
    price: string;
    currency: string;
    purchased?: number;
};
export declare type StripeStoreData = {
    subscriptionId: string;
    productId: string;
};
export declare type UserPurchase = PurchaseCoreData & {
    purchased: number;
    stripeStoreData: StripeStoreData;
    userId: string;
};
