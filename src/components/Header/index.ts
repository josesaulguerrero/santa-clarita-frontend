import { Component } from '../../types/common/Component';
import logo from '../../assets/favicon.png';
import './index.css';
import { Nav } from '../Nav';

export const Header: Component<void> = (): string =>
	`
      <header class="header">
         <section class="logo">
            <img src=${logo} width="80px" alt="Hospital's branding logo">
         </section>
         ${Nav({
						items: ['Specialties', 'Specialists', 'Patients', 'Appointments'],
					})}
      </header>
   `;
