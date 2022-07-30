import { Router } from './routes/router';
import './main.css';
import { Home } from './pages/Home';
import { Routes } from './types/common/Router';

const routes: Routes = [
	{
		route: 'home',
		component: Home,
	},
];

const setUpApp = () => {
	const router = Router.getInstance();
	router.setUpInitialRoute('home');
	router.setUpRoutes(routes);
};

setUpApp();
