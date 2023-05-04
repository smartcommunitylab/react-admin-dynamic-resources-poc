import { ListGuesser } from 'react-admin';

import { ComponentType, ReactElement } from 'react';

import { PostsView } from './posts';
import { UsersView } from './users';

//build views
export interface View {
    key: string;
    name?: string;
    list?: ComponentType<any> | ReactElement;
    create?: ComponentType<any> | ReactElement;
    edit?: ComponentType<any> | ReactElement;
    show?: ComponentType<any> | ReactElement;
    icon?: ComponentType<any>;
}

class Views {
    views: Array<View> = [];

    put(v: View) {
        this.views.push(v);
    }

    get(key: string) {
        return this.views.find(v => v.key === key);
    }

    list() {
        return this.views;
    }
}

export const fetchViews = (types: string[]): View[] => {
    return types.map(t => {
        let v = views.get(t);
        if (!v) {
            v = {
                key: t,
                name: t,
                list: ListGuesser,
            };
        }
        return v;
    });
};

//register
const views = new Views();
views.put(PostsView);
views.put(UsersView);
