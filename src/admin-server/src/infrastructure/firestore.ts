import  { Firestore } from '@google-cloud/firestore';

const db = new Firestore({
  projectId: 'mathclient',
  keyFilename: 'C:/SVN/OTHER/Mathclient/assests/secrets/mathclient-66b52d57a866.json',
});

export function addToDatabase(entityType, entity){
    return db.collection(entityType).add(entity);
} 

export function patchToDatabase(entityType, entity){
    return db.collection(entityType).doc(entity.id).set(entity);
} 

export function deleteFromDatabase(entityType, id){
    return db.collection(entityType).doc(id).delete();
} 

export function getFromDatabase(entityType, query: [string, string, any][]){
    query ||= [];
    const filteredCollection = query
        .reduce((collection, queryPart: [any, any, any]) => collection.where(...queryPart), db.collection(entityType));
    return filteredCollection.get();
}

export const problemSetApi = {
    addToDatabase,
    getFromDatabase,
    patchToDatabase,
    deleteFromDatabase
};