import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';
import * as bcrypt from 'bcrypt';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string;

  @IsNotEmpty()
  @IsDefined()
  password: string;
}
