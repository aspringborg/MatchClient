import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private databaseApiService;
    constructor(appService: AppService);
    getProblemSets(): Promise<any[]>;
    getProblemSetDetailsById(id: any): Promise<any[]>;
    addNewProblemSet(newProblemSet: any): Promise<any>;
    updateProblemSet(newProblemSet: any): Promise<any>;
    deleteProblemSet(id: any): Promise<string>;
    getClasses(): Promise<any[]>;
    getClassDetailsById(id: any): Promise<any[]>;
    addNewClass(newClass: any): Promise<any>;
    updateClassDetails(aClass: any): Promise<any>;
    deleteClass(id: any): Promise<any>;
    getAssignments(): Promise<any[]>;
    getAssignmentDetailsById(id: any): Promise<any[]>;
    addNewAssignment(newClass: any): Promise<any>;
    updateAssignment(aClass: any): Promise<any>;
    deleteAssignment(id: any): Promise<any>;
}
