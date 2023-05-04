import { fetchUtils, DataProvider } from 'ra-core';
import jsonServerProvider from 'ra-data-json-server';
import { Options } from 'react-admin';

const fetchJson = (url: string, options: Options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }

    options.credentials = 'include';

    return fetchUtils.fetchJson(url, options);
};

const dataProvider = (apiUrl: string, httpClient = fetchJson): DataProvider => {
    const provider = jsonServerProvider(apiUrl, httpClient);

    return {
        fetchResources: async (): Promise<string[]> => {
            return ['posts', 'comments', 'todos', 'users'];
        },
        getList: (resource, params) => provider.getList(resource, params),
        getOne: (resource, params) => provider.getOne(resource, params),
        getMany: (resource, params) => provider.getMany(resource, params),
        getManyReference: (resource, params) =>
            provider.getManyReference(resource, params),
        update: (resource, params) => provider.update(resource, params),
        updateMany: (resource, params) => provider.updateMany(resource, params),
        create: (resource, params) => provider.create(resource, params),
        delete: (resource, params) => provider.delete(resource, params),
        deleteMany: (resource, params) => provider.deleteMany(resource, params),
    };
};

export default dataProvider;
