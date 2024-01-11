import { NetworkClient, NetworkRequest, RawNetworkResponse } from './types';
export declare class NetworkClientImpl implements NetworkClient {
    execute(request: NetworkRequest): Promise<RawNetworkResponse>;
}
