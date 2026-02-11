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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const admin_schema_1 = require("./schemas/admin.schema");
let AdminService = class AdminService {
    constructor(adminModel) {
        this.adminModel = adminModel;
    }
    async create(createUserDto) {
        const existingUser = await this.adminModel.findOne({ email: createUserDto.email });
        if (existingUser) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        const user = new this.adminModel(createUserDto);
        return user.save();
    }
    async findByEmail(email) {
        return this.adminModel.findOne({ email: email.toLowerCase() });
    }
    async findById(id) {
        return this.adminModel.findById(id);
    }
    async updateLastLogin(id) {
        await this.adminModel.findByIdAndUpdate(id, { lastLoginAt: new Date() });
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AdminService);
//# sourceMappingURL=admin.service.js.map