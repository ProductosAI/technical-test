import { DatabaseDataSource } from '../interfaces/data-sources/database';
import { Cache } from 'cache-manager';
export declare class InMemoryDataSource<T> implements DatabaseDataSource<T> {
    private cacheManager;
    constructor(cacheManager: Cache);
    set(key: string, object: T, ttl?: number): Promise<boolean>;
    get(key: string): Promise<T>;
}
