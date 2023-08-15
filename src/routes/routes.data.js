import Auth from '../components/screens/auth/Auth';
import Home from '../components/screens/home/Home';
import Profile from '../components/screens/profile/Profile';
import NewItem from '../components/screens/new-item/NewItem';
import Item from '../components/screens/item/Item';

export const routes = [
	{
		path: '/auth',
		component: Auth,
		isAuth: false,
	},
	{
		path: '/',
		component: Home,
		isAuth: true,
	},
	{
		path: '/new-item',
		component: NewItem,
		isAuth: true,
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true,
	},
	{
		path: '/items/:id',
		component: Item,
		auth: true,
	},
];
