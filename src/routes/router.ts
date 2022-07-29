import { IRoute } from './../types/common/Router';
import { Routes } from '../types/common/Router';
import { BehaviorSubject } from 'rxjs';
import { Component } from '../types/common/Component';

export class Router {
	private static instance: Router;
	private routes: Routes;
	private currentRoute: string;
	private $rootNode: HTMLElement;
	private route$: BehaviorSubject<string>;

	private constructor() {
		this.routes = [];
		this.route$ = new BehaviorSubject<string>(location.hash);
		this.currentRoute = location.hash;
		this.$rootNode = document.querySelector('#root')!;
		this.updateUI();
	}

	private getComponent(route: string): Component<void> {
		const componentIndex = this.routes.findIndex((r) => r.route === route);
		return componentIndex < 0
			? () => document.createElement('section')
			: this.routes[componentIndex].component;
	}

	private updateUI() {
		this.route$.subscribe((route) => {
			location.hash = route;
			this.currentRoute = route;
			const renderComponent = this.getComponent(route);
			this.$rootNode.innerHTML = '';
			this.$rootNode.appendChild(renderComponent());
		});
	}

	public addRoute(route: IRoute) {
		this.routes.push(route);
	}

	public getRoute() {
		return this.route$.asObservable();
	}

	public updateHash(newRoute: string): void {
		if (newRoute !== this.currentRoute) {
			this.route$.next(newRoute);
		}
	}

	public static getInstance = (): Router => {
		if (!Router.instance) {
			Router.instance = new Router();
		}
		return Router.instance;
	};
}
