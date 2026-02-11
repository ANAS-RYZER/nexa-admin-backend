"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetApprovalSchema = exports.assetApproval = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const asset_type_1 = require("../interfaces/asset.type");
let assetApproval = class assetApproval extends mongoose_2.Document {
};
exports.assetApproval = assetApproval;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'issuerprofiles',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], assetApproval.prototype, "issuerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'assets',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], assetApproval.prototype, "assetId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], assetApproval.prototype, "issuername", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], assetApproval.prototype, "assetName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: Object.values(asset_type_1.AssetStatus),
        required: true,
    }),
    __metadata("design:type", String)
], assetApproval.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
    }),
    __metadata("design:type", String)
], assetApproval.prototype, "issuerComments", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], assetApproval.prototype, "issueremail", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
    }),
    __metadata("design:type", String)
], assetApproval.prototype, "adminComments", void 0);
exports.assetApproval = assetApproval = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'assetapprovals',
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    })
], assetApproval);
exports.AssetApprovalSchema = mongoose_1.SchemaFactory.createForClass(assetApproval);
//# sourceMappingURL=assetApproval.schema.js.map