import {
  Controller,
  Get,
  Patch,
  Query,
  Body,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { AssetApprovalService } from './asset.service';
import { AssetApprovalPaginationDto } from './dto/asset-approval-pagination.dto';
import { UpdateAssetApprovalDto } from './dto/update-asset-approval.dto';

@Controller('asset-approval')
export class AssetApprovalController {
  constructor(
    private readonly assetApprovalService: AssetApprovalService,
  ) {}

  /**
   * GET /asset-approval/list
   * Query params:
   *  - status (optional)
   *  - page
   *  - limit
   */
  @Get('list')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get asset approval list' })
  @ApiResponse({ status: 200, description: 'Asset approval list returned' })
  async getAssetApprovalList(
    @Query() query: AssetApprovalPaginationDto,
  ) {
    return this.assetApprovalService.getAll(query);
  }

  /**
   * PATCH /asset-approval/update?assetId=xxxx
   * Body:
   * {
   *   "status": "Approval" | "Rejected",
   *   "adminComments": "optional"
   * }
   */
  @Patch('update')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Approve or reject asset' })
  async updateAssetApproval(
    @Query('assetId') assetId: string,
    @Body() body: UpdateAssetApprovalDto,
  ) {
    if (!assetId) {
      throw new BadRequestException('assetId is required');
    }

    return this.assetApprovalService.updateAssetApproval(assetId, body);
  }
}
