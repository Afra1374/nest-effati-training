import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Cat } from "./interfaces/cats.interface.js";

@Injectable()
export class CatsService implements OnApplicationBootstrap {
    private readonly cats: Cat[] = []
    
    create(cat: Cat){
        this.cats.push(cat)
    }
    
    findAll(): Cat[] {
        return this.cats
    }
    onApplicationBootstrap(){
        this.create({
            name: 'nabat',
            age: 1.7,
            breed: 'persian'
        })
        console.log(this.findAll())
    }
}