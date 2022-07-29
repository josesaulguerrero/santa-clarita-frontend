import { Component } from '../../types/common/Component';

interface INavlinkProps {
	content: string;
	href: string;
}

export const Navlink: Component<INavlinkProps> = ({ content, href }): string =>
	`<a class="navlink" href="${href}" >${content}</a>`;
