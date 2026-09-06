import { Module } from "@nestjs/common";
import { CatsService } from "./cats.service.js";


@Module({
    providers:[ 
        CatsService
    ]
})
export class catsModule {}