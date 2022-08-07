import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { databaseApi } from './infrastructure/database';

@Controller()
export class AppController {
  private databaseApiService = databaseApi();

  constructor(private readonly appService: AppService) {}

  @Get('problemSets')
  async getProblemSets(): Promise<any[]> {
    return await this.databaseApiService.problemSets.getAll();
  }

  @Get('problemSets/{id}')
  async getProblemSetDetailsById(@Param('id') id): Promise<any[]> {
    return await this.databaseApiService.problemSets.getById(id);
  }

  @Post('problemSets')
  async addNewProblemSet(@Body() newProblemSet): Promise<any> {
    return await this.databaseApiService.problemSets.add(newProblemSet);
  }

  @Patch('problemSets/{id}')
  async updateProblemSet(@Body() newProblemSet): Promise<any> {
    return await databaseApi().problemSets.updateById(newProblemSet, newProblemSet.id);
  }

  @Delete('problemSets/{id}')
  async deleteProblemSet(@Param('id') id): Promise<string> {
    return await databaseApi().problemSets.deleteById(id);
  }

  @Get('classes')
  async getClasses(): Promise<any[]> {
    return await this.databaseApiService.classes.getAll();
  }

  @Get('classes/{id}')
  async getClassDetailsById(@Param('id') id): Promise<any[]> {
    return await this.databaseApiService.classes.getById(id);
  }

  @Post('classes')
  async addNewClass(@Body() newClass): Promise<any> {
    return await this.databaseApiService.classes.add(newClass);
  }

  @Patch('classes/{id}')
  async updateClassDetails(@Body() aClass): Promise<any> {
    return await this.databaseApiService.classes.updateById(aClass, aClass.id);
  }

  @Delete('classes/{id}')
  async deleteClass(@Param('id') id): Promise<any> {
    return await this.databaseApiService.classes.deleteById(id);
  }

  @Get('assignments')
  async getAssignments(): Promise<any[]> {
    return await this.databaseApiService.assignments.getAll();
  }

  @Get('assignments/{id}')
  async getAssignmentDetailsById(@Param('id') id): Promise<any[]> {
    return await this.databaseApiService.assignments.getById(id);
  }

  @Post('assignments')
  async addNewAssignment(@Body() newClass): Promise<any> {
    return await this.databaseApiService.assignments.add(newClass);
  }

  @Patch('assignments/{id}')
  async updateAssignment(@Body() aClass): Promise<any> {
    return await this.databaseApiService.assignments.updateById(aClass, aClass.id);
  }

  @Delete('assignments/{id}')
  async deleteAssignment(@Param('id') id): Promise<any> {
    return await this.databaseApiService.assignments.deleteById(id);
  }
}
