import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { UsersInterceptor } from 'src/interceptors/users.interceptor';
import { IsOwnerOrAdmin } from 'src/is-admin-or-owner.decorator';
import { OwnerOrAdminGuard } from 'src/owner-or-admin.gurad';
import { Roles } from 'src/roles.decorator';
import { RolesGuard } from 'src/roles.guard';
import { CreateUserDto } from './userDto/users.dto';
import { UsersService } from './users.service';
import { Entities } from 'src/entity.enum';

@Controller('users')
@UseInterceptors(UsersInterceptor)
@UseGuards(AuthGuard('jwt'), RolesGuard, OwnerOrAdminGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @Roles('ADMIN')
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  @IsOwnerOrAdmin('User')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.findUserById(id);
  }

  @Post()
  @Roles('ADMIN')
  async createUser(@Body(ValidationPipe) user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }

  @Put(':id')
  @IsOwnerOrAdmin('User')
  async updateUser(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<User | null> {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  @IsOwnerOrAdmin(Entities.USER)
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
