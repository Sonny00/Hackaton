import { IsOptional, IsString } from 'class-validator';

export class FiltersDTO {
  @IsOptional()
  @IsString()
  search: string;

  @IsOptional()
  @IsString()
  skill: string;

  @IsOptional()
  @IsString()
  team: string;
}
