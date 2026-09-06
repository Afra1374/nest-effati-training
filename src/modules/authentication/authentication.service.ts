import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { sendSms } from "./send-sms.provider.js";

@Injectable()
export class AuthenticationService implements OnApplicationBootstrap{
    constructor(private readonly sendSms: sendSms){
    }
    onApplicationBootstrap() {
        this.authorize()
    }
    authorize() {
        this.sendSms.sendOtpCode()
    }
}