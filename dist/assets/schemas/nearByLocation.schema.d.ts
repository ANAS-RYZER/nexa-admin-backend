import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export declare enum LocationType {
    AIRPORT = "airport",
    METRO = "metro",
    HOSPITAL = "hospital",
    MALL = "mall",
    SCHOOL = "school",
    PARK = "park",
    RESTAURANT = "restaurant",
    BANK = "bank",
    ATM = "atm",
    PHARMACY = "pharmacy",
    GROCERY = "grocery",
    GYM = "gym",
    CINEMA = "cinema",
    OTHER = "other"
}
export type NearByLocationDocument = HydratedDocument<NearByLocation>;
export declare class NearByLocation extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    locationType: LocationType;
    name: string;
    address: string;
    distanceInKm: number;
    isActive: boolean;
    latitude: string;
    longitude: string;
}
export declare const NearByLocationSchema: MongooseSchema<NearByLocation, import("mongoose").Model<NearByLocation, any, any, any, Document<unknown, any, NearByLocation, any, {}> & NearByLocation & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, NearByLocation, Document<unknown, {}, import("mongoose").FlatRecord<NearByLocation>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<NearByLocation> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
