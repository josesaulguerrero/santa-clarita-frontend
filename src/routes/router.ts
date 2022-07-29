import { Routes } from '../types/common/Router';

const routes: Routes = [
	{
		route: 'specialists',
		component: () => 'hello world',
	},
];

export const resolveRoute = () => {
	console.log(location.pathname);
};

export const Router = () => {
	// const path = 'specialists';
	// const componentIndex = routes.findIndex((route) => route.route === path);
	// const component =
	// 	componentIndex < 0 ? () => 'Not found' : routes[componentIndex].component;
	// document.querySelector('#root')!.innerHTML = component(null);
};
