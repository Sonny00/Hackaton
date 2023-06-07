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
import { Roles } from 'src/roles.decorator';
import { UsersInterceptor } from 'src/interceptors/users.interceptor';
import { RolesGuard } from 'src/roles.guard';
import { CreateUserDto } from './userDto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(UsersInterceptor)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  // TODO: Add authorization
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.findUserById(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  async createUser(@Body(ValidationPipe) user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }

  @Put(':id')
  // TODO: Add authorization
  async updateUser(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<User | null> {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  // TODO: Add authorization
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
