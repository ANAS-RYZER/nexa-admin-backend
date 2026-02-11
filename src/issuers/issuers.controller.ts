import { BadRequestException, Body, Controller, Get, Param, Patch, Query, UseGuards } from "@nestjs/common";
import { IssuersService } from "./issuers.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ApiBearerAuth, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { UpdateApplicationStatusDto } from "./dto/updateApplicationStatus.dto";
import { Types } from "mongoose";

@Controller("issuers")
export class IssuersController {
  constructor(private readonly issuersService: IssuersService) {}

  @Get("list")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current user profile" })
  @ApiResponse({ status: 200, description: "User profile returned" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getIssuerApplicationList() {
    return this.issuersService.getIssuerApplicationList();
  }


  @Get("onboarded-assets-count")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get count of onboarded assets for an issuer" })
  @ApiResponse({ status: 200, description: "Asset count returned" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 400, description: "Bad request" })
  async getOnboardedAssetsCount(@Query("issuerId") issuerId: string) {
    if (!issuerId) {
      throw new BadRequestException("issuerId is required");
    }
    return this.issuersService.getOnboardedAssetsCount(issuerId);
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get issuer application by id" })
  @ApiResponse({ status: 200, description: "Issuer application returned" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Issuer application not found" })
  async getIssuerById(@Param("id") id: string) {
    return this.issuersService.getIssuerById(id);
  }

  @Patch(":id/status")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update issuer application status" })
  @ApiResponse({ status: 200, description: "Application status updated" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Issuer application not found" })
  async updateStatusApplication(
    @Param("id") id: string,
    @Body() body: UpdateApplicationStatusDto
  ) {
    console.log(`Updating status for application ID: ${id} to ${body.status}`);
    return this.issuersService.updateStatusApplication(id, body.status);
  }
}
