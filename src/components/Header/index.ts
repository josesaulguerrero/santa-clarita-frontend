import { Component } from '../../types/common/Component';
import logo from '../../assets/favicon.png';
import './index.css';

export const Header: Component = (): string => {
	return `
      <header class="header">
         <section class="logo">
            <img src=${logo} width="80px" alt="Hospital's branding logo">
         </section>
         <nav class="nav-bar">
            <ul>
               <li>Specialties</li>
               <li>Specialists</li>
               <li>Patients</li>
               <li>Appointment</li>
            </ul>
         </nav>
      </header>
   `;
};
