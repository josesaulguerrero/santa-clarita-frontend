import { Component } from '../../types/common/Component';
import logo from '../../assets/favicon.png';
import './index.css';
import { Nav } from '../Nav';

export const Header: Component<void> = (): HTMLElement => {
	const $header = document.createElement('header');
	const template = `
      <section class="logo">
         <img src=${logo} width="80px" alt="Hospital's branding logo">
      </section>
      `;
	$header.innerHTML = template;
	$header.classList.add('header');
	const $nav = Nav({
		items: ['Specialties', 'Specialists', 'Patients', 'Appointments'],
	});
	$header.querySelector('.logo')?.insertAdjacentElement('afterend', $nav);
	return $header;
};
