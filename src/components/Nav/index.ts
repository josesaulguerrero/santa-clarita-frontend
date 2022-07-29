import { Component } from '../../types/common/Component';
import { Navlink } from '../Navlink';
import './index.css';

interface INavProps {
	items: string[];
}

const mapItems = (items: string[]): HTMLElement[] =>
	items.map((item) => Navlink({ content: item, href: item }));

export const Nav: Component<INavProps> = ({ items }): HTMLElement => {
	const $nav = document.createElement('nav');
	$nav.innerHTML = `<ul class="nav-links"></ul>`;
	$nav.classList.add('nav-bar');
	$nav.querySelector('.nav-links')!.append(...mapItems(items));
	return $nav;
};
