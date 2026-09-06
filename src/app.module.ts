import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { HealthCheckerService } from './health-checker/health-checker.service.js';
import { AuthenticatorServiceService } from './auth/authenticator-service/authenticator-service.service.js';
import { AuthenticationModule } from './modules/authentication/authentication.module.js';
import { AuthorizationModule } from './modules/authorization/authorization.module.js';
import { AccountsManagementModule } from './modules/accounts/accounts-management.module.js';
import { catsModule } from './modules/cats/cats.module.js';

@Module({
  imports: [
    AccountsManagementModule,
    AuthenticationModule,
    AuthorizationModule,
    catsModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService, 
    HealthCheckerService, 
    AuthenticatorServiceService
  ],
})
export class AppModule {}
