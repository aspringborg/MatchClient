import axios from "axios";

const baseOptions = {
    hostname: 'localhost',
    port: 3001,
};

const basePath = path => `http://${baseOptions.hostname}:${baseOptions.port}/${path}`;

function addToDatabase(entityType, entity){
    return axios.post(basePath(entityType), entity).then(res => res.data);
}

function patchToDatabase(entityType, id, entity){
    return axios.patch(basePath(`${entityType}/${id}`), entity).then(res => res.data);
}

function deleteFromDatabase(entityType, id){
    return axios.delete(basePath(`${entityType}/${id}`)).then(res => res.data);
}

const operatorMap = {
    'equals': "=",
}
 
function generateQueryString(entityType, query){
    let path = entityType;
    if(query && query.length > 0){
        path += "?";
        if(query.some(q => q.length !== 3)){
            throw new Error("Wrong format in query");
        }
        query.forEach(queryPart => {
            path += "&" + [queryPart[0], operatorMap[queryPart[1]], queryPart[2]].join();
        });
    }
    return path;
}

function getFromDatabase(entityType, query){
    return axios.get(basePath(generateQueryString(entityType, query))).then(res => res.data);
}

export const problemSetApi = {
    addToDatabase,
    getFromDatabase,
    patchToDatabase,
    deleteFromDatabase,
};