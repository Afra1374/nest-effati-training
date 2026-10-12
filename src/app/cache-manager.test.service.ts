import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, Logger } from "@nestjs/common";
import type { Cache } from "cache-manager";

@Injectable()
export class CacheManagerTestService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly logger:Logger
    ) {
        // logging
        // setInterval(() => {
        //     logger.error('@@@')
        // }, 1000);
        // end-logging

        // caching
        // cacheManager.set('age', 31, 10000)
        // setInterval(async() => {
        //     const age = await cacheManager.get('age')
        //     if (age) {
        //         console.log('your age is =>>>>> ', age);
        //     }
        //  }, 1500);
        //  end caching
    }

}