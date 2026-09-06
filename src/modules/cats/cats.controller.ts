import { Body, Controller, Get, Post } from "@nestjs/common";
import { CatsService } from './cats.service.js';
import { Cat } from "./interfaces/cats.interface.js";

@Controller('cats')
export class CatsController {
    constructor(private CatsService: CatsService){}

    // @Post()
    // async create(@Body() createCatDto: CreateCatDto ){
    //     this.CatsService.create(createCatDto)
    // }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.CatsService.findAll()
    }
}