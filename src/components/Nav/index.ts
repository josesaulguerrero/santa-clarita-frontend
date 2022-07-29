import { Component } from '../../types/common/Component';

interface IProps {
	items: string[];
}

const renderItems = (items: string[]) =>
	items.map((item) => `<li>${item}</li>`);

export const Nav: Component<IProps> = (props): string =>
	`
      <nav class="nav-bar">
         <ul>
            ${renderItems(props.items)}
         </ul>
      </nav>
   `;
