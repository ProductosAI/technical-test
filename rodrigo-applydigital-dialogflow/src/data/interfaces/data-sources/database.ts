export abstract class DatabaseDataSource<T> {
    abstract set(key: string, object: T, ttl?: number): Promise<boolean>;
    abstract get(key: string): Promise<T>;
}