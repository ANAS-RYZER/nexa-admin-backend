import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SpvService } from './spvlist.service';


@Controller('spvs')
export class SpvController {
  constructor(private readonly spvService: SpvService) {}

  @Get(':spvId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get SPV by ID' })
  @ApiResponse({ status: 200, description: 'SPV data returned' })
  async getSpvById(@Param('spvId') spvId: string) {
    return this.spvService.getSpvById(spvId);
  }
}
