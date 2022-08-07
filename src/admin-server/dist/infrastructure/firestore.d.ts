/// <reference types="@google-cloud/firestore" />
export declare function addToDatabase(entityType: any, entity: any): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>;
export declare function patchToDatabase(entityType: any, entity: any): Promise<FirebaseFirestore.WriteResult>;
export declare function deleteFromDatabase(entityType: any, id: any): Promise<FirebaseFirestore.WriteResult>;
export declare function getFromDatabase(entityType: any, query: [string, string, any][]): Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>;
export declare const problemSetApi: {
    addToDatabase: typeof addToDatabase;
    getFromDatabase: typeof getFromDatabase;
    patchToDatabase: typeof patchToDatabase;
    deleteFromDatabase: typeof deleteFromDatabase;
};
