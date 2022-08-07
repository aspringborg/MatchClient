"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.problemSetApi = void 0;
const axios_1 = require("axios");
const baseOptions = {
    hostname: 'localhost',
    port: 3001,
};
const basePath = path => `http://${baseOptions.hostname}:${baseOptions.port}/${path}`;
function addToDatabase(entityType, entity) {
    return axios_1.default.post(basePath(entityType), entity).then(res => res.data);
}
function patchToDatabase(entityType, id, entity) {
    return axios_1.default.patch(basePath(`${entityType}/${id}`), entity).then(res => res.data);
}
function deleteFromDatabase(entityType, id) {
    return axios_1.default.delete(basePath(`${entityType}/${id}`)).then(res => res.data);
}
const operatorMap = {
    'equals': "=",
};
function generateQueryString(entityType, query) {
    let path = entityType;
    if (query && query.length > 0) {
        path += "?";
        if (query.some(q => q.length !== 3)) {
            throw new Error("Wrong format in query");
        }
        query.forEach(queryPart => {
            path += "&" + [queryPart[0], operatorMap[queryPart[1]], queryPart[2]].join();
        });
    }
    return path;
}
function getFromDatabase(entityType, query) {
    return axios_1.default.get(basePath(generateQueryString(entityType, query))).then(res => res.data);
}
exports.problemSetApi = {
    addToDatabase,
    getFromDatabase,
    patchToDatabase,
    deleteFromDatabase,
};
//# sourceMappingURL=jsonserver.js.map