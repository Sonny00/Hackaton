import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: {
        id: uuidv4(),
        ...user,
      },
    });
    return createdUser;
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
    const users = await this.prisma.user.findMany();
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
}
