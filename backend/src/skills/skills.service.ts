import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SkillType, Skills } from '@prisma/client';
//import { EnumType } from 'typescript';
import { CreateSkillDto } from './skillsDto/skills.dto';

@Injectable()
export class SkillsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllSkills(): Promise<Skills[]> {
    return this.prisma.skills.findMany();
  }

  async getSkillById(id: string): Promise<Skills | null> {
    return this.prisma.skills.findUnique({
      where: { id },
    });
  }

  async getSkillByType(skillType: SkillType): Promise<Skills[]> {
    return this.prisma.skills.findMany({
      where: { type: skillType },
    });
  }

  async createSkill(skill: CreateSkillDto): Promise<Skills> {
    return this.prisma.skills.create({
      data: skill,
    });
  }

  async updateSkill(id: string, skill: Skills): Promise<Skills | null> {
    return this.prisma.skills.update({
      where: { id },
      data: skill,
    });
  }

  async deleteSkill(id: string): Promise<void> {
    await this.prisma.skills.delete({
      where: { id },
    });
  }
}
