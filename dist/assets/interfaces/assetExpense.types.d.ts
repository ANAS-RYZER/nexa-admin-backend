import { Types } from 'mongoose';
export interface IAssetExpense {
    issuerId: Types.ObjectId;
    assetId: Types.ObjectId;
    name: string;
    isPercentage: boolean;
    value: number;
    status: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
