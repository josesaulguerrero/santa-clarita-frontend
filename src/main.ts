import { Router } from './routes/router';
import './main.css';
import { Home } from './pages/Home';
import { Routes } from './types/common/Router';
import { Layout } from './pages/Layout';
import { Specialists } from './pages/Specialists';

const routes: Routes = [
	{
		route: 'home',
		component: () => Layout({ child: Home }),
	},
	{
		route: 'specialists',
		component: () => Layout({ child: Specialists }),
	},
];

const setUpApp = () => {
	const router = Router.getInstance();
	router.setUpInitialRoute('home');
	router.setUpRoutes(routes);
};

setUpApp();
