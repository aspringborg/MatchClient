export declare function addToDatabase(entityType: any, entity: any): Promise<any>;
export declare function getFromDatabase(entityType: any, query: any): Promise<any>;
export declare function patchToDatabase(entityType: any, id: any, entity: any): Promise<any>;
export declare function deleteFromDatabase(entityType: any, id: any): Promise<any>;
declare const supportedEntities: readonly ["problemSets", "classes", "assignments"];
declare type SingleApiType = {
    getAll: (query?: any) => Promise<any[]>;
    getById: (id: any, query?: any) => Promise<any>;
    add: (entity: any) => Promise<any>;
    updateById: (entity: any, id: any) => Promise<any>;
    deleteById: (id: any) => Promise<any>;
};
declare type DatabaseApiType = {
    [key in typeof supportedEntities[number]]: SingleApiType;
};
export declare function databaseApi(): DatabaseApiType;
export {};
