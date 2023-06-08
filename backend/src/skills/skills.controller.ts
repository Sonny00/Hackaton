import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SkillType, Skills, User } from '@prisma/client';
import { Roles } from 'src/roles.decorator';
import { RolesGuard } from 'src/roles.guard';
import { CreateSkillDto } from './skillsDto/skills.dto';
import { SkillsService } from './skills.service';
import { OwnerOrAdminGuard } from 'src/owner-or-admin.guard';
import { UserRole } from 'src/users/userRole.enum'; 
import { Entities } from 'src/entity.enum';
import { IsOwnerOrAdmin } from 'src/is-admin-or-owner.decorator';

@Controller('skills')
@UseGuards(AuthGuard('jwt'), RolesGuard, OwnerOrAdminGuard)
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  @Roles(UserRole.ADMIN)
  async getAllSkills(): Promise<Skills[]> {
    return this.skillsService.getAllSkills();
  }

  @Get(':id')
  @Roles('ADMIN')
  async getSkillById(@Param('id') id: string): Promise<Skills | null> {
    return this.skillsService.getSkillById(id);
  }

  @Get()
  @UseGuards(OwnerOrAdminGuard)
  @IsOwnerOrAdmin(Entities.SKILLS)
  async getSkillByType(@Param('type') type: SkillType): Promise<Skills[]> {
    return this.skillsService.getSkillByType(type);
  }

  @Post()
  async createSkill(
    @Body(ValidationPipe) skill: CreateSkillDto,
  ): Promise<Skills> {
    return this.skillsService.createSkill(skill);
  }

  @Put(':id')
  @UseGuards(OwnerOrAdminGuard)
  @IsOwnerOrAdmin(Entities.SKILLS)
  async updateSkill(
    @Param('id') id: string,
    @Body() skill: Skills,
  ): Promise<Skills | null> {
    return this.skillsService.updateSkill(id, skill);
  }

  @Delete(':id')
  @UseGuards(OwnerOrAdminGuard)
  @IsOwnerOrAdmin(Entities.SKILLS)
  async deleteSkill(@Param('id') id: string): Promise<void> {
    await this.skillsService.deleteSkill(id);
  }
}
