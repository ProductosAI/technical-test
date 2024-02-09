import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { DialogFlowResult } from 'src/dialogflow-result';
import { UserGetParameters } from './user-get-parameters';

@Injectable()
export class UserService {
    private readonly cache: Cache;

    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async getUser(query: UserGetParameters): Promise<any> {
        
        const asasad = await this.cacheManager.set(query.id, { abc: 1 });
        const result = await this.cacheManager.get<any>(query.id);
        // const result: DialogFlowResult = {
        //   result: response.queryResult?.fulfillmentText || `Sorry, I'm not ready to answer that`
        // };

        return result;
    };
}
