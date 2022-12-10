import Dashboard from '../pages/dashboard';
import Home from '../pages/home';

export const routeNames = {
	home: '/',
	dashboard: '/dashboard',
	login: '/login'
};

export const routes = [
	{
		path: routeNames.home,
		title: 'Home',
		component: Home
	},
	{
		path: routeNames.dashboard,
		component: Dashboard,
		authenticatedRoute: true
	}
];
