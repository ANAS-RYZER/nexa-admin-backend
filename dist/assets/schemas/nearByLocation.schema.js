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
exports.NearByLocationSchema = exports.NearByLocation = exports.LocationType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var LocationType;
(function (LocationType) {
    LocationType["AIRPORT"] = "airport";
    LocationType["METRO"] = "metro";
    LocationType["HOSPITAL"] = "hospital";
    LocationType["MALL"] = "mall";
    LocationType["SCHOOL"] = "school";
    LocationType["PARK"] = "park";
    LocationType["RESTAURANT"] = "restaurant";
    LocationType["BANK"] = "bank";
    LocationType["ATM"] = "atm";
    LocationType["PHARMACY"] = "pharmacy";
    LocationType["GROCERY"] = "grocery";
    LocationType["GYM"] = "gym";
    LocationType["CINEMA"] = "cinema";
    LocationType["OTHER"] = "other";
})(LocationType || (exports.LocationType = LocationType = {}));
let NearByLocation = class NearByLocation extends mongoose_2.Document {
};
exports.NearByLocation = NearByLocation;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Asset',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], NearByLocation.prototype, "assetId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(LocationType),
        required: true,
    }),
    __metadata("design:type", String)
], NearByLocation.prototype, "locationType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], NearByLocation.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], NearByLocation.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, min: 0 }),
    __metadata("design:type", Number)
], NearByLocation.prototype, "distanceInKm", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: true }),
    __metadata("design:type", Boolean)
], NearByLocation.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], NearByLocation.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], NearByLocation.prototype, "longitude", void 0);
exports.NearByLocation = NearByLocation = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'nearbylocations',
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    })
], NearByLocation);
exports.NearByLocationSchema = mongoose_1.SchemaFactory.createForClass(NearByLocation);
//# sourceMappingURL=nearByLocation.schema.js.map