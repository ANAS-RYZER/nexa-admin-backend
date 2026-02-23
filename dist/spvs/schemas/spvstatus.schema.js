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
exports.SpvStatusSchema = exports.spvStatus = void 0;
const spv_schema_1 = require("./spv.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const issuer_schema_1 = require("../../issuers/schemas/issuer.schema");
let spvStatus = class spvStatus extends mongoose_2.Document {
};
exports.spvStatus = spvStatus;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: issuer_schema_1.IssuerUser.name,
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], spvStatus.prototype, "issuerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: spv_schema_1.SPV.name,
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], spvStatus.prototype, "spvId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], spvStatus.prototype, "issuername", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], spvStatus.prototype, "issueremail", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], spvStatus.prototype, "spvname", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: Object.values(spv_schema_1.CompanyStatus),
        required: true,
    }),
    __metadata("design:type", String)
], spvStatus.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
    }),
    __metadata("design:type", String)
], spvStatus.prototype, "issuerComments", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
    }),
    __metadata("design:type", String)
], spvStatus.prototype, "adminComments", void 0);
exports.spvStatus = spvStatus = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'spvstatus',
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    })
], spvStatus);
exports.SpvStatusSchema = mongoose_1.SchemaFactory.createForClass(spvStatus);
//# sourceMappingURL=spvstatus.schema.js.map