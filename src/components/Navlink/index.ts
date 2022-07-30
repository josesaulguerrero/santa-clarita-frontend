import { Router } from '../../routes/router';
import { Component } from '../../types/common/Component';
import './index.css';

interface INavlinkProps {
	content: string;
	href: string;
}

const onClick = (event: MouseEvent) => {
	event.preventDefault();
	const redirectTo = (event.target as HTMLAnchorElement).dataset.href!;
	Router.getInstance().updateHash(redirectTo);
};

export const Navlink: Component<INavlinkProps> = ({
	content,
	href,
}): HTMLAnchorElement => {
	const $navlink = document.createElement('a');
	$navlink.href = href.toLowerCase();
	$navlink.dataset.href = href.toLowerCase();
	$navlink.id = `navlink-${href}`;
	$navlink.classList.add(`navlink-${href}`);
	$navlink.onclick = onClick;
	$navlink.innerHTML = content;
	return $navlink;
};
