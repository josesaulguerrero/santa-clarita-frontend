import { Component } from '../../types/common/Component';
import './index.css';
import { Navlink } from '../../components/Navlink';
import { SpecialtyService } from '../../services/specialty';
import { Specialty } from '../../components/Specialty';

export const Specialties: Component<void> = () => {
	const $specialties = document.createElement('section');
	$specialties.classList.add('specialties');
	$specialties.innerHTML = `
      <h1 class="specialties-title" >Specialties</h1>
      <ul class="specialties-list" id="specialties-list" >
			<header class="specialties-list-header">
				<span>Name</span>
				<span>Id</span>
			</header>
			<h3 class="message" id="message"></h3>
		</ul>
	`;
	SpecialtyService.getInstance()
		.getAll()
		.subscribe((specialties) => {
			if (specialties.length >= 0) {
				$specialties.querySelector('#message')!.innerHTML =
					'There are no specialties yet!';
			}
			specialties.forEach((specialty) => {
				$specialties
					.querySelector('#specialties-list')
					?.append(Specialty(specialty));
			});
		});
	$specialties
		.querySelector('#specialties-list')
		?.insertAdjacentElement(
			'afterend',
			Navlink({ content: 'Create a new Specialty', href: 'specialties/create' })
		);
	return $specialties;
};
