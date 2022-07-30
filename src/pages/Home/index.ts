import { Nav } from '../../components/Nav/index';
import { Component } from '../../types/common/Component';
import hospitalLogo from '../../assets/favicon.png';
import './index.css';

const navlinksConfig = {
	items: [
		{
			content: 'Specialists',
			href: 'specialists',
		},
		{
			content: 'Specialties',
			href: 'specialties',
		},
		{
			content: 'Patients',
			href: 'patients',
		},
		{
			content: 'appointments',
			href: 'appointments',
		},
	],
};

export const Home: Component<void> = () => {
	const $home = document.createElement('section');
	$home.classList.add('home');
	$home.innerHTML = `
		<section class="logo">
			<img src="${hospitalLogo}" width="200" alt="hospital logo" class="logo-img">
			<h1 class="home-title">Santa Clarita hospital</h1>
		</section>
		<section class="nav" id="nav"></section>
	`;
	$home.querySelector('#nav')?.appendChild(Nav(navlinksConfig));
	return $home;
};
