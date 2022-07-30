import { Header } from '../components/Header';
import { Component } from './../types/common/Component';

export const Home: Component<void> = () => {
	console.log('Hi from homer');
	const $home = document.createElement('section');
	$home.appendChild(Header());
	$home.insertAdjacentHTML('beforeend', 'Hello world');
	return $home;
};
