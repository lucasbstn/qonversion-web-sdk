import { UserService } from './types';
import { User } from '../../dto/User';
import { ApiInteractor, RequestConfigurator } from '../network';
import { PrimaryConfigProvider } from '../types';
export declare class UserServiceImpl implements UserService {
    private readonly primaryConfigProvider;
    private readonly requestConfigurator;
    private readonly apiInteractor;
    constructor(primaryConfigProvider: PrimaryConfigProvider, requestConfigurator: RequestConfigurator, apiInteractor: ApiInteractor);
    createUser(id: string): Promise<User>;
    getUser(id: string): Promise<User>;
}
