import { Component } from '../../types/common/Component';
import { Navlink } from '../Navlink';
import './index.css';

type navlinkConfig = {
	content: string;
	href: string;
};

interface INavProps {
	items: navlinkConfig[];
}

const mapItems = (items: navlinkConfig[]): HTMLElement[] =>
	items.map((item) => Navlink({ content: item.content, href: item.href }));

export const Nav: Component<INavProps> = ({ items }): HTMLElement => {
	const $nav = document.createElement('nav');
	$nav.innerHTML = `<ul class="nav-links"></ul>`;
	$nav.classList.add('nav-bar');
	$nav.querySelector('.nav-links')!.append(...mapItems(items));
	return $nav;
};
