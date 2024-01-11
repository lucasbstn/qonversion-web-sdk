export declare const executeGrantEntitlementsRequest: (apiUrl: string, accessToken: string, userId: string, entitlementId: string, expires: number) => Promise<Response>;
export declare const executeRevokeEntitlementsRequest: (apiUrl: string, accessToken: string, userId: string, entitlementId: string) => Promise<Response>;
