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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_get_parameters_1 = require("../../domain/models/user/user-get-parameters");
const user_set_parameters_1 = require("../../domain/models/user/user-set-parameters");
const get_user_use_case_1 = require("../useCases/get-user-use-case");
const set_user_use_case_1 = require("../useCases/set-user-use-case");
let UserController = class UserController {
    constructor(getUserUseCase, setUserUseCase) {
        this.getUserUseCase = getUserUseCase;
        this.setUserUseCase = setUserUseCase;
    }
    async getUser(res, params) {
        const user = await this.getUserUseCase.execute(params);
        if (!user) {
            res.status(common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async createUser(query) {
        return await this.setUserUseCase.execute(query);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_get_parameters_1.UserGetParameters]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_set_parameters_1.UserSetParameters]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [get_user_use_case_1.GetUserUseCase,
        set_user_use_case_1.SetUserUseCase])
], UserController);
//# sourceMappingURL=user.controller.js.map