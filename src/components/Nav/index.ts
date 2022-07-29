import { Component } from '../../types/common/Component';
import { Navlink } from '../Navlink';
import './index.css';

interface INavProps {
	items: string[];
}

const renderItems = (items: string[]) =>
	items.map((item) => Navlink({ content: item, href: item })).join('');

export const Nav: Component<INavProps> = ({ items }): string =>
	`
      <nav class="nav-bar">
         <ul class="nav-links">
            ${renderItems(items)}
         </ul>
      </nav>
   `;
