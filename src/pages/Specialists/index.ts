import { SpecialistService } from '../../services/specialist/index';
import { Specialist } from '../../components/Specialist';
import { Component } from '../../types/common/Component';
import './index.css';

export const Specialists: Component<void> = () => {
	const $specialists = document.createElement('section');
	$specialists.classList.add('specialists');
	$specialists.innerHTML = `
      <h1 class="specialists-title" >Specialists</h1>
      <ul class="specialists-list" id="specialists-list" ></ul>
	`;
	SpecialistService.getInstance()
		.getAll()
		.subscribe((specialists) => {
			specialists.forEach((specialist) => {
				$specialists
					.querySelector('#specialists-list')
					?.append(Specialist(specialist));
			});
		});
	return $specialists;
};
