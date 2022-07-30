import { SpecialistService } from '../../services/specialist/index';
import { Specialist } from '../../components/Specialist';
import { Component } from '../../types/common/Component';
import './index.css';
import { Navlink } from '../../components/Navlink';

export const Specialists: Component<void> = () => {
	const $specialists = document.createElement('section');
	$specialists.classList.add('specialists');
	$specialists.innerHTML = `
      <h1 class="specialists-title" >Specialists</h1>
      <ul class="specialists-list" id="specialists-list" >
			<header class="specialists-list-header">
				<span>Name</span>
				<span>Id</span>
			</header>
		</ul>
	`;
	SpecialistService.getInstance()
		.getAll()
		.subscribe((specialists) => {
			if (specialists.length <= 0) {
				$specialists.querySelector('#message')!.innerHTML =
					'There are no specialists yet!';
			}
			specialists.forEach((specialist) => {
				$specialists
					.querySelector('#specialists-list')
					?.append(Specialist(specialist));
			});
		});
	$specialists
		.querySelector('#specialists-list')
		?.insertAdjacentElement(
			'afterend',
			Navlink({ content: 'Create a specialist', href: 'specialists/create' })
		);
	return $specialists;
};
