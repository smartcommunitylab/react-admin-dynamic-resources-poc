import * as React from 'react';
import { Datagrid, List, ReferenceField, TextField } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import EmailIcon from '@mui/icons-material/Email';
import { View } from './index';

export const PostsList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const PostsShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="userId" reference="users">
                <TextField source="username" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </SimpleShowLayout>
    </Show>
);

export const PostsView: View = {
    key: 'posts',
    name: 'Posts',
    icon: EmailIcon,
    list: PostsList,
    show: PostsShow,
};
