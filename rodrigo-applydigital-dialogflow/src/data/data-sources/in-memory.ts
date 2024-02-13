import { Injectable, Inject } from '@nestjs/common';
import { DatabaseDataSource } from '../interfaces/data-sources/database';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '../../application/environment-variables';
import { StorageFullError } from './models/storage-full-error';

@Injectable()
export class InMemoryDataSource<T> implements DatabaseDataSource<T> {
    private maxItemsInStorage: number;
    
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private configService: ConfigService
    ) {
        const maxItemsInStorage = this.configService.get(EnvironmentVariables.MAX_ITEMS_IN_MEMORY_STORAGE);
        if (maxItemsInStorage) {
            const maxItemsInStorageNumber = parseInt(maxItemsInStorage);

            if (maxItemsInStorageNumber >= 0) {
                this.maxItemsInStorage = maxItemsInStorageNumber;
            }
        }
    }
    
    async set(key: string, object: T, ttl?: number): Promise<boolean> {
        await this.checkIfItemCanBeStored();

        await this.cacheManager.store.set(key, object, Math.max(ttl || 0, 0));
        return true;
    }

    async get(key: string): Promise<T> {
        return await this.cacheManager.store.get<T>(key);
    }

    async checkIfItemCanBeStored() {
        if (this.maxItemsInStorage && (await this.cacheManager.store.keys()).length >= this.maxItemsInStorage) {
            throw new StorageFullError(this.maxItemsInStorage);
        }
    }
}