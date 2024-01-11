import { PurchaseCoreData, StripeStoreData, UserPurchase } from '../../dto/Purchase';
export declare type PurchasesService = {
    sendStripePurchase: (userId: string, data: PurchaseCoreData & StripeStoreData) => Promise<UserPurchase>;
};
export declare type PurchasesController = {
    sendStripePurchase: (data: PurchaseCoreData & StripeStoreData) => Promise<UserPurchase>;
};
export declare type PurchaseCoreDataApi = {
    price: string;
    currency: string;
    purchased: number;
    userId: string;
};
export declare type StripeStoreDataApi = {
    subscription_id: string;
    product_id: string;
};
export declare type UserPurchaseApi = PurchaseCoreDataApi & {
    stripe_store_data: StripeStoreDataApi;
};
