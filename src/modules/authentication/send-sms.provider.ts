import { Inject, Injectable } from "@nestjs/common";
import type { Request } from "express";
import { REQUEST } from "@nestjs/core";

@Injectable()
export class sendSms {
    @Inject(REQUEST)
    request:Request;
    
    sendOtpCode () {
        console.log('@@@@@@@@@@@@@@@@@',this.request.url);
        console.log("OTP CODE SENT!!!!!!!!!!!!!!!!!!!@@@@@ز@@@@");
    }
}