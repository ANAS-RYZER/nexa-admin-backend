import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { IssuersModule } from './issuers/issuers.module';
import { SpvStatusModule } from './spvs/spv.module';
import { AssetApprovalModule } from './assets/asset.module';
@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // MongoDB Connection
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI', 'mongodb://localhost:27017/nexa_admin'),
      }),
    }),

    // Feature Modules
    AuthModule,
    AdminModule,
    IssuersModule,
    SpvStatusModule,
    AssetApprovalModule,
  ],
})
export class AppModule {}
