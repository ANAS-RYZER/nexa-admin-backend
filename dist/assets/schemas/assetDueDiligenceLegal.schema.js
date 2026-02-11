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
exports.AssetDueDiligenceLegalSchema = exports.AssetDueDiligenceLegal = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AssetDueDiligenceLegal = class AssetDueDiligenceLegal extends mongoose_2.Document {
};
exports.AssetDueDiligenceLegal = AssetDueDiligenceLegal;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Asset',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], AssetDueDiligenceLegal.prototype, "assetId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'issuerprofiles',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], AssetDueDiligenceLegal.prototype, "issuerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], AssetDueDiligenceLegal.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AssetDueDiligenceLegal.prototype, "logoUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AssetDueDiligenceLegal.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AssetDueDiligenceLegal.prototype, "link", void 0);
exports.AssetDueDiligenceLegal = AssetDueDiligenceLegal = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'assetduediligencelegals',
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    })
], AssetDueDiligenceLegal);
exports.AssetDueDiligenceLegalSchema = mongoose_1.SchemaFactory.createForClass(AssetDueDiligenceLegal);
//# sourceMappingURL=assetDueDiligenceLegal.schema.js.map