import { Injectable, Inject } from '@nestjs/common';
import { DatabaseDataSource } from '../interfaces/data-sources/database';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class InMemoryDataSource<T> implements DatabaseDataSource<T> {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
    
    async set(key: string, object: T, ttl?: number): Promise<boolean> {
        await this.cacheManager.store.set(key, object, Math.max(ttl || 0, 0));
        return true;
    }
    async get(key: string): Promise<T> {
        const asdads = await this.cacheManager.store.keys();
        return await this.cacheManager.store.get<T>(key);
    }
}