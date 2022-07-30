import { Router } from './routes/router';
import './main.css';
import { Home } from './pages/Home/Home';
import { Routes } from './types/common/Router';
import { Layout } from './pages/Layout/Layout';

const routes: Routes = [
	{
		route: 'home',
		component: () => Layout({ child: Home }),
	},
];

const setUpApp = () => {
	const router = Router.getInstance();
	router.setUpInitialRoute('home');
	router.setUpRoutes(routes);
};

setUpApp();
