import { CreateSpecialist } from './components/CreateSpecialist/index';
import { Router } from './routes/router';
import './main.css';
import { Home } from './pages/Home';
import { Routes } from './types/common/Router';
import { Layout } from './pages/Layout';
import { Specialists } from './pages/Specialists';
import { Patients } from './pages/Patients';

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
	{
		route: 'patients',
		component: () => Layout({ child: Patients }),
	},
];

const setUpApp = () => {
	const router = Router.getInstance();
	router.setUpInitialRoute('home');
	router.setUpRoutes(routes);
};

setUpApp();
