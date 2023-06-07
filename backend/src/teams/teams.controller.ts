import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/roles.guard';
import { Roles } from 'src/roles.decorator';
import { Teams } from '@prisma/client';
import { CreateTeamDto, UpdateTeamDto } from './teamsDto/teams.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles('ADMIN')
    async getTeam(): Promise<Teams[]> {
      return this.teamsService.getTeams();
    }
  
    @Get(':id')
    // TODO: Add authorization
    async geTeamById(@Param('id') id: string): Promise<Teams | null> {
      return this.teamsService.findOneById(id);
    }
  
    @Post()
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    async createTeam(@Body(ValidationPipe) user: CreateTeamDto): Promise<Teams> {
      return await this.teamsService.create(user);
    }
  
    @Put(':id')
    // TODO: Add authorization
    async updateTeam(@Param('id') id: string, @Body(ValidationPipe) team: UpdateTeamDto): Promise<Teams | null> {
      return this.teamsService.updateTeam(id, team);
    }
  
    @Delete(':id')
    // TODO: Add authorization
    async deleteTeam(@Param('id') id: string): Promise<void> {
      await this.teamsService.deleteTeam(id);
    }
}
