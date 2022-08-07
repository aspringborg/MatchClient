"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseApi = exports.deleteFromDatabase = exports.patchToDatabase = exports.getFromDatabase = exports.addToDatabase = void 0;
const firestore_1 = require("./firestore");
const jsonserver_1 = require("./jsonserver");
const databaseProviderName = 'jsonserver';
const getDataProvider = () => {
    switch (databaseProviderName) {
        case 'firestore': {
            return firestore_1.problemSetApi;
        }
        case 'jsonserver': {
            return jsonserver_1.problemSetApi;
        }
        default: {
            throw new Error('Unknown database provider');
        }
    }
};
function addToDatabase(entityType, entity) {
    return getDataProvider().addToDatabase(entityType, entity);
}
exports.addToDatabase = addToDatabase;
function getFromDatabase(entityType, query) {
    return getDataProvider().getFromDatabase(entityType, query);
}
exports.getFromDatabase = getFromDatabase;
function patchToDatabase(entityType, id, entity) {
    return getDataProvider().patchToDatabase(entityType, id, entity);
}
exports.patchToDatabase = patchToDatabase;
function deleteFromDatabase(entityType, id) {
    return getDataProvider().deleteFromDatabase(entityType, id);
}
exports.deleteFromDatabase = deleteFromDatabase;
function generateStandardApi(entityType) {
    return {
        getAll: query => getFromDatabase(entityType, query),
        getById: (id, query) => getFromDatabase(`${entityType}/${id}`, query),
        add: entity => addToDatabase(entityType, entity),
        updateById: (entity, id) => patchToDatabase(entityType, id, entity),
        deleteById: id => deleteFromDatabase(entityType, id),
    };
}
const supportedEntities = ['problemSets', 'classes', 'assignments'];
function databaseApi() {
    const api = {};
    supportedEntities
        .forEach(entityType => {
        api[entityType] = generateStandardApi(entityType);
    });
    return api;
}
exports.databaseApi = databaseApi;
//# sourceMappingURL=database.js.map