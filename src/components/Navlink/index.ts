import { Component } from '../../types/common/Component';

interface INavlinkProps {
	content: string;
	href: string;
}

const onClick = (event: MouseEvent) => {
	event.preventDefault();
	console.log(event);
};

export const Navlink: Component<INavlinkProps> = ({
	content,
	href,
}): HTMLAnchorElement => {
	const $navlink = document.createElement('a');
	$navlink.href = href.toLowerCase();
	$navlink.id = `navlink-${href}`;
	$navlink.onclick = onClick;
	$navlink.innerHTML = content;
	return $navlink;
};
