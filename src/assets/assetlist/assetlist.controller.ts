import { Controller, Get, Param, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AssetService } from './assetlist.service';
import { AssetIdParamDto } from './dto/assetlist-id-param.dto';

@ApiTags('Admin Assets')
@Controller('admin/assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Get(':assetId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get Asset by ID (Admin)' })
  @ApiResponse({ status: 200, description: 'Asset data returned successfully' })
  @HttpCode(HttpStatus.OK)
  async getAssetById(@Param() params: AssetIdParamDto) {
    const asset = await this.assetService.getAssetById(params.assetId);

    return {
      data: asset,
      message: 'Asset fetched successfully',
    };
  }
}
