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
exports.AssetExpenseSchema = exports.AssetExpense = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AssetExpense = class AssetExpense extends mongoose_2.Document {
};
exports.AssetExpense = AssetExpense;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Asset',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], AssetExpense.prototype, "assetId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'issuerprofiles',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], AssetExpense.prototype, "issuerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AssetExpense.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], AssetExpense.prototype, "isPercentage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, min: 0 }),
    __metadata("design:type", Number)
], AssetExpense.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], AssetExpense.prototype, "status", void 0);
exports.AssetExpense = AssetExpense = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'assetExpenses',
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    })
], AssetExpense);
exports.AssetExpenseSchema = mongoose_1.SchemaFactory.createForClass(AssetExpense);
//# sourceMappingURL=assetExpense.schema.js.map