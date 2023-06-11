import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Teams, User } from '@prisma/client';
import { UsersInterceptor } from 'src/interceptors/users.interceptor';
import { IsOwnerOrAdmin } from 'src/is-admin-or-owner.decorator';
import { OwnerOrAdminGuard } from 'src/owner-or-admin.guard';
import { Roles } from 'src/roles.decorator';
import { RolesGuard } from 'src/roles.guard';
import { CreateUserDto } from './userDto/users.dto';
import { UsersService } from './users.service';
import { Entities } from 'src/entity.enum';
import { UserRole } from './userRole.enum';
import { FiltersDTO } from './userDto/filters.dto';
import { query } from 'express';

@Controller('users')
@UseInterceptors(UsersInterceptor)
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @Roles(UserRole.ADMIN)
  async getUsers(@Query() query): Promise<User[]> {
    return this.userService.getUsers(query);
  }

  @Get(':id')
  @UseGuards(OwnerOrAdminGuard)
  @IsOwnerOrAdmin(Entities.USER)
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.findUserById(id);
  }

  @Post()
  @Roles(UserRole.ADMIN)
  async createUser(@Body(ValidationPipe) user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }

  @Put(':id')
  @UseGuards(OwnerOrAdminGuard)
  @IsOwnerOrAdmin(Entities.USER)
  async updateUser(
    @Param('id') id: string,
    @Body(ValidationPipe) user: User,
  ): Promise<User | null> {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  @UseGuards(OwnerOrAdminGuard)
  @IsOwnerOrAdmin(Entities.USER)
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.userService.deleteUser(id);
  }

  @Get('/team/:id')
  async getTeam(@Param('id') id: string): Promise<Teams> {
    try {
      return await this.userService.getTeam(id);
    } catch (e) {
      throw e;
    }
  }
}
