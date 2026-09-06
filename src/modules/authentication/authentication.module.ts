import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service.js";
import { sendSms } from "./send-sms.provider.js";
import { AuthenticationController } from "./authentication.controller.js";

@Module({
    providers: [
        AuthenticationService,
        sendSms
    ],
    controllers:[
        AuthenticationController
    ]
})
export class AuthenticationModule{}