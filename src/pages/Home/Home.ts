import { Component } from '../../types/common/Component';

export const Home: Component<void> = () => {
	const $home = document.createElement('section');
	$home.insertAdjacentHTML('beforeend', 'Hello world');
	return $home;
};
