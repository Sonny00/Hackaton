import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtService } from './jwt/jwt.service';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, AuthModule, JwtModule],
  // controllers: [AppController, AuthController],
  providers: [PrismaClient, JwtService, PrismaService, AuthService],
})
export class AppModule {}
