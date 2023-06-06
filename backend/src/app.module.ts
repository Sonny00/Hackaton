import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtService } from './jwt/jwt.service';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UsersModule, AuthModule],
  // controllers: [AppController, AuthController],
  providers: [PrismaClient, JwtService, PrismaService],
})
export class AppModule {}
