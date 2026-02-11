"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpvStatusModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const spv_controller_1 = require("./spv.controller");
const spv_service_1 = require("./spv.service");
const spvstatus_schema_1 = require("./schemas/spvstatus.schema");
const spv_schema_1 = require("./schemas/spv.schema");
const spvlist_module_1 = require("./spvlist/spvlist.module");
const email_module_1 = require("../infra/email/email.module");
let SpvStatusModule = class SpvStatusModule {
};
exports.SpvStatusModule = SpvStatusModule;
exports.SpvStatusModule = SpvStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: spvstatus_schema_1.spvStatus.name, schema: spvstatus_schema_1.SpvStatusSchema },
                { name: spv_schema_1.SPV.name, schema: spv_schema_1.SPVSchema },
            ]),
            spvlist_module_1.SpvModule,
            email_module_1.EmailModule,
        ],
        controllers: [spv_controller_1.SpvStatusController],
        providers: [spv_service_1.SpvStatusService],
    })
], SpvStatusModule);
//# sourceMappingURL=spv.module.js.map