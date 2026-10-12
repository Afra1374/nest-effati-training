import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { HealthCheckerService } from './health-checker/health-checker.service.js';
import { AuthenticatorServiceService } from './auth/authenticator-service/authenticator-service.service.js';
import { AuthenticationModule } from './modules/authentication/authentication.module.js';
import { AuthorizationModule } from './modules/authorization/authorization.module.js';
import { AccountsManagementModule } from './modules/accounts/accounts-management.module.js';
import { catsModule } from './modules/cats/cats.module.js';
import { FileHandlerModule } from './modules/file-handler/file-handler.module.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { CacheModule } from '@nestjs/cache-manager';
import { CacheManagerTestService } from './app/cache-manager.test.service.js';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(join(process.cwd()), './storage/upload'),
    }),
    CacheModule.register({
      isGlobal: true
    }),
    AccountsManagementModule,
    AuthenticationModule,
    AuthorizationModule,
    catsModule,
    FileHandlerModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService, 
    HealthCheckerService, 
    AuthenticatorServiceService,
    CacheManagerTestService,
    Logger
  ],
})
export class AppModule {}
