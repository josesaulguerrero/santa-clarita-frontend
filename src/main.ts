import { Appointments } from './pages/Appointments/index';
import { CreateSpecialist } from './components/CreateSpecialist/index';
import { Router } from './routes/router';
import './main.css';
import { Home } from './pages/Home';
import { Routes } from './types/common/Router';
import { Layout } from './pages/Layout';
import { Specialists } from './pages/Specialists';
import { Patients } from './pages/Patients';
import { CreatePatient } from './components/CreatePatient';
import { Specialties } from './pages/Specialties';
import { CreateSpecialty } from './components/CreateSpecialty';
import { CreateAppointment } from './components/CreateAppointment';

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
	{
		route: 'patients/create',
		component: () => Layout({ child: CreatePatient }),
	},
	{
		route: 'specialties',
		component: () => Layout({ child: Specialties }),
	},
	{
		route: 'specialties/create',
		component: () => Layout({ child: CreateSpecialty }),
	},
	{
		route: 'appointments',
		component: () => Layout({ child: Appointments }),
	},
	{
		route: 'appointments/create',
		component: () => Layout({ child: CreateAppointment }),
	},
];

const setUpApp = () => {
	const router = Router.getInstance();
	router.setUpInitialRoute('home');
	router.setUpRoutes(routes);
};

setUpApp();
