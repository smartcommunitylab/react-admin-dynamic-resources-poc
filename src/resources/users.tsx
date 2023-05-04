import { ListGuesser } from 'react-admin';
import PersonIcon from '@mui/icons-material/Person';
import { View } from './index';

export const UsersView: View = {
    key: 'users',
    name: 'Users',
    icon: PersonIcon,
    list: ListGuesser,
};
