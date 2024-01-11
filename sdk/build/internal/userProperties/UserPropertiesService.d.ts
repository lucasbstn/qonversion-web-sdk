import { UserPropertiesSendResponse, UserPropertiesService, UserPropertyData } from './types';
import { ApiInteractor, RequestConfigurator } from '../network';
export declare class UserPropertiesServiceImpl implements UserPropertiesService {
    private readonly requestConfigurator;
    private readonly apiInteractor;
    constructor(requestConfigurator: RequestConfigurator, apiInteractor: ApiInteractor);
    sendProperties(userId: string, properties: Record<string, string>): Promise<UserPropertiesSendResponse>;
    getProperties(userId: string): Promise<UserPropertyData[]>;
}
