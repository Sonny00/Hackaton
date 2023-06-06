import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string;

  @IsNotEmpty()
  @IsDefined()
  password: string;

  @IsNotEmpty()
  @IsDefined()
  role: Role;
}
