import { Role } from '@prisma/client';
import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';

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
