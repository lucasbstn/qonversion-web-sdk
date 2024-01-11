import { UserService } from './types';
import { User } from '../../dto/User';
export declare class UserServiceDecorator implements UserService {
    private readonly userService;
    private userLoadingPromise;
    constructor(userService: UserService);
    createUser(id: string): Promise<User>;
    getUser(id: string): Promise<User>;
    private loadOrCreateUser;
}
