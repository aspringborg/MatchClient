"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.problemSetApi = exports.getFromDatabase = exports.deleteFromDatabase = exports.patchToDatabase = exports.addToDatabase = void 0;
const firestore_1 = require("@google-cloud/firestore");
const db = new firestore_1.Firestore({
    projectId: 'mathclient',
    keyFilename: 'C:/SVN/OTHER/Mathclient/assests/secrets/mathclient-66b52d57a866.json',
});
function addToDatabase(entityType, entity) {
    return db.collection(entityType).add(entity);
}
exports.addToDatabase = addToDatabase;
function patchToDatabase(entityType, entity) {
    return db.collection(entityType).doc(entity.id).set(entity);
}
exports.patchToDatabase = patchToDatabase;
function deleteFromDatabase(entityType, id) {
    return db.collection(entityType).doc(id).delete();
}
exports.deleteFromDatabase = deleteFromDatabase;
function getFromDatabase(entityType, query) {
    query || (query = []);
    const filteredCollection = query
        .reduce((collection, queryPart) => collection.where(...queryPart), db.collection(entityType));
    return filteredCollection.get();
}
exports.getFromDatabase = getFromDatabase;
exports.problemSetApi = {
    addToDatabase,
    getFromDatabase,
    patchToDatabase,
    deleteFromDatabase
};
//# sourceMappingURL=firestore.js.map