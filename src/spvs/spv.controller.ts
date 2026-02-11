import { Controller, Get, Patch, Query, UseGuards , Body, BadRequestException} from '@nestjs/common';
import { SpvStatusService } from './spv.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SpvStatusPaginationDto } from './dto/spv-status-pagination.dto';
import { UpdateSpvStatusDto } from './dto/update-spv-status.dto';

@Controller('spv-status')
export class SpvStatusController {
  constructor(private readonly spvStatusService: SpvStatusService) {}

  @Get('list')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get SPV status list' })
  @ApiResponse({ status: 200, description: 'SPV status list returned' })
  async getSpvStatusList(@Query() query: SpvStatusPaginationDto) {
    return this.spvStatusService.getAll(query);
  }

  @Patch('update')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Active or reject SPV status' })
  async updateSpvStatus(
    @Query('spvId') spvId: string,
    @Body() body: UpdateSpvStatusDto,
  ) {
    if (!spvId) {
      throw new BadRequestException('spvId is required');
    }

    return this.spvStatusService.updateSpvStatus(spvId, body);
  }


}
