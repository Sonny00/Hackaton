import { Injectable, NotFoundException } from '@nestjs/common';
import { Teams, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './userDto/users.dto';
import * as bcrypt from 'bcrypt';
import { TeamsService } from 'src/teams/teams.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private teamsService: TeamsService) {}

  async create(data: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const userData = this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
        role: data.role,
        firstname: data.firstname,
        lastname: data.lastname,
        jobTitle: data.jobTitle,
        team: undefined,
        skills: undefined,
      },
    });
    return userData;
  }

  async findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      include: {
        team: true,
        skills: true,
      },
    });
    return users;
  }

  async updateUser(id: string, user: User): Promise<User | null> {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: user,
    });
    return updatedUser;
  }

  async deleteUser(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async getTeam(id: string): Promise<Teams> {
    const currentUser = await this.findOne(id);
    if (!currentUser.teamId) {
      throw new NotFoundException('Team not found');
    }
    return this.teamsService.findOneById(currentUser.teamId);
  }
}
