import { Component } from '../../types/common/Component';
import './index.css';

interface ILayoutProps {
	child: Component<void>;
}

export const Layout: Component<ILayoutProps> = ({ child }): HTMLElement => {
	const $layout = document.createElement('section');
	$layout.classList.add('layout');
	$layout.innerHTML = `
		<section class="floating-container"></section>
	`;
	$layout.querySelector('.floating-container')?.appendChild(child());
	return $layout;
};
