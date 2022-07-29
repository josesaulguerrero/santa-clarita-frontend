import { Component } from '../../types/common/Component';
import './index.css';

interface IProps {
	items: string[];
}

const renderItems = (items: string[]) =>
	items.map((item) => `<li>${item}</li>`).join('');

export const Nav: Component<IProps> = (props): string =>
	`
      <nav class="nav-bar">
         <ul class="nav-links">
            ${renderItems(props.items)}
         </ul>
      </nav>
   `;
