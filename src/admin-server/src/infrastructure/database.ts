import { problemSetApi as firestoreApi} from './firestore';
import { problemSetApi as jsonserverApi} from './jsonserver';

const databaseProviderName: string = 'jsonserver';

const getDataProvider = () => {
    switch(databaseProviderName){
        case 'firestore': {
            return firestoreApi;
        }
        case 'jsonserver':{
            return jsonserverApi;
        }
        default: {
            throw new Error('Unknown database provider');
        }
    }
}

export function addToDatabase(entityType, entity){
    return getDataProvider().addToDatabase(entityType, entity);
} 

export function getFromDatabase(entityType, query){
    return getDataProvider().getFromDatabase(entityType, query);
}

export function patchToDatabase(entityType, id, entity){
    return getDataProvider().patchToDatabase(entityType, id, entity);
} 

export function deleteFromDatabase(entityType, id){
    return getDataProvider().deleteFromDatabase(entityType, id);
}

function generateStandardApi(entityType){
    return {
        getAll: query => getFromDatabase(entityType, query),
        getById: (id, query) => getFromDatabase(`${entityType}/${id}`, query),
        add: entity => addToDatabase(entityType, entity),
        updateById: (entity, id) => patchToDatabase(entityType, id, entity),
        deleteById: id => deleteFromDatabase(entityType, id),
    }
}

const supportedEntities = ['problemSets', 'classes', 'assignments'] as const;

type SingleApiType = {
    getAll: (query?: any) => Promise<any[]>,
    getById: (id: any, query?: any) => Promise<any>,
    add: (entity: any) => Promise<any>,
    updateById: (entity: any, id: any) => Promise<any>,
    deleteById: (id: any) => Promise<any>,
};
type DatabaseApiType = {[key in typeof supportedEntities[number]]: SingleApiType};

export function databaseApi(){
    const api  = {};
    supportedEntities
    .forEach(entityType => {
        api[entityType] = generateStandardApi(entityType);
    });
    return api as DatabaseApiType;
}