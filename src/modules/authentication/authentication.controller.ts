import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { AuthenticationService } from './authentication.service.js';
import { LoginRequestDTO } from "./login.request.dto.js";
import type { Request } from "express";
import { user } from "../../user/user.decorator.js";

@Controller('auth')
export class AuthenticationController {
    constructor(
        private readonly authenticationService:AuthenticationService
    ){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() body:LoginRequestDTO){
        
        this.authenticationService.authorize()
        return {
            status: 'success',
            dataThatYouPut: body
        }
    }

    @Get('get-cookies')
    findAll(
        @Req() request: Request,
        @user({
            "id": 101,
            "firstName": "Alan",
            "lastName": "Turing",
            "email": "alan@email.com",
            "roles": ["admin"],
            "user": 'ali13744444'
        }) user:any ) {

    console.log('this from user decorator => ', user);
    
    console.log(request.cookies); // or "request.cookies['cookieKey']"
    // or console.log(request.signedCookies);
    const cookie = {...request.cookies}
    return cookie
    }

}