import { CreateSpecialist } from './components/CreateSpecialist/index';
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
	{
		route: 'specialists/create',
		component: () => Layout({ child: CreateSpecialist }),
	},
];

const setUpApp = () => {
	const router = Router.getInstance();
	router.setUpInitialRoute('home');
	router.setUpRoutes(routes);
};

setUpApp();
