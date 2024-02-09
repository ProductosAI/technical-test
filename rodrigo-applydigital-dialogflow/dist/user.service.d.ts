import { Cache } from 'cache-manager';
import { UserGetParameters } from './user-get-parameters';
export declare class UserService {
    private cacheManager;
    private readonly cache;
    constructor(cacheManager: Cache);
    getUser(query: UserGetParameters): Promise<any>;
}
