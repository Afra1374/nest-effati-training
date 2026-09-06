import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { AuthenticationService } from './authentication.service.js';
import { LoginRequestDTO } from "./login.request.dto.js";

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
}