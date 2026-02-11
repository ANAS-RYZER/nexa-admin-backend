import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { IssuerUser, IssuerUserDocument } from "./schemas/issuer.schema";
import { Model, Types } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import {
  ApplicationStatus,
  IssuerApplication,
  IssuerApplicationDocument,
} from "./schemas/issuerApplication.schema";
import { CompanyStatus, SPV, SPVType, SPVDocument } from "src/spvs/schemas/spv.schema";
import { Asset, AssetDocument } from "../assets/schemas/asset.schema";

@Injectable()
export class IssuersService {
  constructor(
    @InjectModel(IssuerUser.name)
    private issuerUserModel: Model<IssuerUserDocument>,
    @InjectModel(IssuerApplication.name)
    private issuerApplicationModel: Model<IssuerApplicationDocument>,
    @InjectModel(Asset.name)
    private assetModel: Model<AssetDocument>,
    @InjectModel(SPV.name)
    private spvModel: Model<SPVDocument>
  ) {}

  async getIssuerApplicationList(): Promise<{
    success: boolean;
    data: IssuerApplicationDocument[];
  }> {
    const list = await this.issuerApplicationModel.find().exec();
    return { success: true, data: list };
  }

  async getIssuerById(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException("Invalid application id");
    }

    const application = await this.issuerApplicationModel.findById(id).lean();

    if (!application) {
      throw new NotFoundException("Issuer application not found");
    }

    const issuerUser = await this.issuerUserModel
      .findById(application.userId)
      .lean();

    if (!issuerUser) {
      throw new NotFoundException("Issuer user not found");
    }

    // 🔥 Non-blocking update (do NOT await)
    this.issuerApplicationModel
      .updateOne({ _id: id }, { $set: { lastSeenByAdminAt: new Date() } })
      .exec();

    const spvs = await this.getIssuerSpvs(application.userId);

    return {
      success: true,
      data: {
        application,
        issuer: issuerUser,
        spvs: spvs.data,
      },
    };
  }

  async updateStatusApplication(
    id: string,
    status: "pending" | "approved" | "rejected"
  ): Promise<{ success: boolean; message: string }> {
    const application = await this.issuerApplicationModel
      .findById(id)
      .select("userId")
      .lean();

    if (!application) {
      throw new NotFoundException("Issuer application not found");
    }

    const issuer = await this.issuerUserModel
      .findById(application.userId)
      .select("kycStatus")
      .lean();

    if (!issuer) {
      throw new NotFoundException("Issuer user not found");
    }

    // 3️⃣ Block update if KYB not verified
    if (!issuer.kycStatus) {
      throw new BadRequestException(
        "KYB verification is required before updating application status"
      );
    }

    const result = await this.issuerApplicationModel.findByIdAndUpdate(
      id,
      { status },
      { new: false }
    );

    if (!result) {
      throw new NotFoundException("Issuer application not found");
    }

    return {
      success: true,
      message: "Application status updated successfully",
    };
  }


  async getIssuerSpvs(issuerId: string): Promise<{
    success: boolean;
    data: {
      id: string;
      name: string;
      status: CompanyStatus;
      type: SPVType;
      jurisdiction: string;
      formationDate: Date;
    }[];
  }> {
    if (!Types.ObjectId.isValid(issuerId)) {
      throw new BadRequestException("Invalid issuerId");
    }

    // SPV.userId is stored as a string, so we convert issuerId to string for matching
    const spvs = await this.spvModel
      .find({ userId: issuerId.toString() })
      .lean()
      .exec();

  const data = spvs.map(spv => ({
    id: spv._id.toString(),
    name: spv.name,
    status: spv.status,
    type: spv.type,
    jurisdiction: spv.jurisdiction,
    formationDate: spv.formationDate,
  }));

    return {
      success: true,
      data: data
    };
  }

  async getOnboardedAssetsCount(issuerId: string): Promise<{
    success: boolean;
    data: {
      issuerId: string;
      count: number;
    };
  }> {
    if (!Types.ObjectId.isValid(issuerId)) {
      throw new BadRequestException("Invalid issuer ID");
    }

    const count = await this.assetModel.countDocuments({
      issuerId: new Types.ObjectId(issuerId),
    });

    return {
      success: true,
      data: {
        issuerId,
        count,
      },
    };
  }
}
