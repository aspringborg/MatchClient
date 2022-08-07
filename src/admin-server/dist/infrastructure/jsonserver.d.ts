declare function addToDatabase(entityType: any, entity: any): Promise<any>;
declare function patchToDatabase(entityType: any, id: any, entity: any): Promise<any>;
declare function deleteFromDatabase(entityType: any, id: any): Promise<any>;
declare function getFromDatabase(entityType: any, query: any): Promise<any>;
export declare const problemSetApi: {
    addToDatabase: typeof addToDatabase;
    getFromDatabase: typeof getFromDatabase;
    patchToDatabase: typeof patchToDatabase;
    deleteFromDatabase: typeof deleteFromDatabase;
};
export {};
