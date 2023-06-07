import { IsNotEmpty, IsEnum, IsDefined } from 'class-validator';
import { SkillType } from '@prisma/client';

export class CreateSkillDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  @IsDefined()
  name: string;

  @IsNotEmpty()
  @IsEnum(SkillType)
  type: SkillType;
}
