import { useEffect, useState } from 'react';
import {
    AdminContext,
    AdminUI,
    defaultI18nProvider,
    localStorageStore,
    Resource,
    Loading,
    useDataProvider,
} from 'react-admin';

import dataProvider from './dataProvider';
//statically import and link resource views
import { View, fetchViews } from './resources';

const provider = dataProvider('https://jsonplaceholder.typicode.com');
const store = localStorageStore();

//init bare app
const App = () => {
    return (
        <AdminContext
            dataProvider={provider}
            i18nProvider={defaultI18nProvider}
            store={store}
        >
            <DynamicAdminUI />
        </AdminContext>
    );
};

function DynamicAdminUI() {
    const [views, setViews] = useState<View[]>([]);
    const dataProvider = useDataProvider();

    useEffect(() => {
        //fetch and store
        dataProvider.fetchResources().then((res: any) => {
            setViews(fetchViews(res));
        });
    }, [dataProvider]);

    console.log('views ', views);

    return (
        <AdminUI ready={Loading}>
            {views.map((v: any) => (
                <Resource
                    name={v.name}
                    key={v.key}
                    list={v.list}
                    show={v.show}
                    create={v.create}
                    edit={v.edit}
                    icon={v.icon}
                />
            ))}
        </AdminUI>
    );
}

export default App;
