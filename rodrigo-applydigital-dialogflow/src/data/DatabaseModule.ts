import { Module } from '@nestjs/common';

//import { ConfigModule } from '@nestjs/config';
import { DatabaseDataSource } from './interfaces/data-sources/database';
import { InMemoryDataSource } from './data-sources/in-memory';

@Module({
  providers: [
    {
      provide: DatabaseDataSource,
      useClass: InMemoryDataSource,
    }
  ],
  exports: [
    {
      provide: DatabaseDataSource,
      useClass: InMemoryDataSource,
    },
  ],
})
export class DatabaseModule {}
