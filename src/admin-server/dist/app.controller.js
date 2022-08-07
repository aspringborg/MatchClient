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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const database_1 = require("./infrastructure/database");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
        this.databaseApiService = (0, database_1.databaseApi)();
    }
    async getProblemSets() {
        return await this.databaseApiService.problemSets.getAll();
    }
    async getProblemSetDetailsById(id) {
        return await this.databaseApiService.problemSets.getById(id);
    }
    async addNewProblemSet(newProblemSet) {
        return await this.databaseApiService.problemSets.add(newProblemSet);
    }
    async updateProblemSet(newProblemSet) {
        return await (0, database_1.databaseApi)().problemSets.updateById(newProblemSet, newProblemSet.id);
    }
    async deleteProblemSet(id) {
        return await (0, database_1.databaseApi)().problemSets.deleteById(id);
    }
    async getClasses() {
        return await this.databaseApiService.classes.getAll();
    }
    async getClassDetailsById(id) {
        return await this.databaseApiService.classes.getById(id);
    }
    async addNewClass(newClass) {
        return await this.databaseApiService.classes.add(newClass);
    }
    async updateClassDetails(aClass) {
        return await this.databaseApiService.classes.updateById(aClass, aClass.id);
    }
    async deleteClass(id) {
        return await this.databaseApiService.classes.deleteById(id);
    }
    async getAssignments() {
        return await this.databaseApiService.assignments.getAll();
    }
    async getAssignmentDetailsById(id) {
        return await this.databaseApiService.assignments.getById(id);
    }
    async addNewAssignment(newClass) {
        return await this.databaseApiService.assignments.add(newClass);
    }
    async updateAssignment(aClass) {
        return await this.databaseApiService.assignments.updateById(aClass, aClass.id);
    }
    async deleteAssignment(id) {
        return await this.databaseApiService.assignments.deleteById(id);
    }
};
__decorate([
    (0, common_1.Get)('problemSets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getProblemSets", null);
__decorate([
    (0, common_1.Get)('problemSets/{id}'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getProblemSetDetailsById", null);
__decorate([
    (0, common_1.Post)('problemSets'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addNewProblemSet", null);
__decorate([
    (0, common_1.Patch)('problemSets/{id}'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateProblemSet", null);
__decorate([
    (0, common_1.Delete)('problemSets/{id}'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteProblemSet", null);
__decorate([
    (0, common_1.Get)('classes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getClasses", null);
__decorate([
    (0, common_1.Get)('classes/{id}'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getClassDetailsById", null);
__decorate([
    (0, common_1.Post)('classes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addNewClass", null);
__decorate([
    (0, common_1.Patch)('classes/{id}'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateClassDetails", null);
__decorate([
    (0, common_1.Delete)('classes/{id}'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteClass", null);
__decorate([
    (0, common_1.Get)('assignments'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAssignments", null);
__decorate([
    (0, common_1.Get)('assignments/{id}'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAssignmentDetailsById", null);
__decorate([
    (0, common_1.Post)('assignments'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addNewAssignment", null);
__decorate([
    (0, common_1.Patch)('assignments/{id}'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateAssignment", null);
__decorate([
    (0, common_1.Delete)('assignments/{id}'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteAssignment", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map