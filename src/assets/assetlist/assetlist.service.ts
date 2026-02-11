import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage, Types } from 'mongoose';

import { Asset, AssetDocument } from '../schemas/asset.schema';
import { SPV } from '../../spvs/schemas/spv.schema';

@Injectable()
export class AssetService {
  constructor(
    @InjectModel(Asset.name)
    private readonly assetModel: Model<AssetDocument>,

    @InjectModel(SPV.name)
    private readonly spvModel: Model<SPV>,
  ) {}

  async getAssetById(assetId: string) {
    const objectId = new Types.ObjectId(assetId);

    const pipeline: PipelineStage[] = [
      {
        $match: { _id: objectId },
      },

      // Lookup SPV (Company)
      {
        $lookup: {
          from: this.spvModel.collection.name, 
          localField: 'spvId',
          foreignField: '_id',
          as: 'company',
        },
      },
      {
        $unwind: {
          path: '$company',
          preserveNullAndEmptyArrays: true,
        },
      },

      // FAQs
      {
        $lookup: {
          from: 'faqs',
          localField: '_id',
          foreignField: 'assetId',
          as: 'faqs',
        },
      },

      // Tenants
      {
        $lookup: {
          from: 'assettenants',
          localField: '_id',
          foreignField: 'assetId',
          as: 'tenants',
        },
      },

      // Documents
      {
        $lookup: {
          from: 'assetdocuments',
          localField: '_id',
          foreignField: 'assetId',
          as: 'documents',
        },
      },

      // Amenities
      {
        $lookup: {
          from: 'assetamenities',
          localField: '_id',
          foreignField: 'assetId',
          as: 'amenities',
        },
      },

      // Expenses
      {
        $lookup: {
          from: 'assetexpenses',
          localField: '_id',
          foreignField: 'assetId',
          as: 'expenses',
        },
      },

      // Features
      {
        $lookup: {
          from: 'assetfeatures',
          localField: '_id',
          foreignField: 'assetId',
          as: 'features',
        },
      },

      // Risk Factors
      {
        $lookup: {
          from: 'riskfactors',
          localField: '_id',
          foreignField: 'assetId',
          as: 'riskFactors',
        },
      },

      // Risk Disclosures
      {
        $lookup: {
          from: 'riskdisclosures',
          localField: '_id',
          foreignField: 'assetId',
          as: 'riskDisclosures',
        },
      },

      // Terms & Conditions
      {
        $lookup: {
          from: 'assettermsandconditions',
          localField: '_id',
          foreignField: 'assetId',
          as: 'termsAndConditions',
        },
      },

      // Exit Opportunities
      {
        $lookup: {
          from: 'exitopportunities',
          localField: '_id',
          foreignField: 'assetId',
          as: 'exitOpportunities',
        },
      },

      // Additional Taxes
      {
        $lookup: {
          from: 'additionaltaxes',
          localField: '_id',
          foreignField: 'assetId',
          as: 'additionalTaxes',
        },
      },

      // Due Diligence
      {
        $lookup: {
          from: 'assetduediligencelegals',
          localField: '_id',
          foreignField: 'assetId',
          as: 'dueDiligenceLegal',
        },
      },
      {
        $lookup: {
          from: 'assetduediligencestructures',
          localField: '_id',
          foreignField: 'assetId',
          as: 'dueDiligenceStructure',
        },
      },
      {
        $lookup: {
          from: 'assetduediligencevaluations',
          localField: '_id',
          foreignField: 'assetId',
          as: 'dueDiligenceValuation',
        },
      },

      // Signature Documents
      {
        $lookup: {
          from: 'documenttemplates',
          localField: '_id',
          foreignField: 'assetId',
          as: 'signatureDocuments',
        },
      },
    ];

    const result = await this.assetModel.aggregate(pipeline);

    if (!result.length) {
      throw new NotFoundException('Asset not found');
    }

    const asset = result[0];

    return {
      ...asset,
      dueDiligence: {
        legal: asset.dueDiligenceLegal ?? [],
        structure: asset.dueDiligenceStructure ?? [],
        valuation: asset.dueDiligenceValuation ?? [],
      },
    };
  }
}
