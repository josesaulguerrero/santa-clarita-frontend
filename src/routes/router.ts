import { Routes } from '../types/common/Router';
import { BehaviorSubject } from 'rxjs';
import { Component } from '../types/common/Component';

export class Router {
	private static instance: Router;
	private routes: Routes;
	private currentRoute: string;
	private initialRoute: string;
	private $rootNode: HTMLElement;
	private route$: BehaviorSubject<string>;
	private hasBeenInitialized: boolean;

	private constructor() {
		const initialRoute = '/';
		this.routes = [];
		this.route$ = new BehaviorSubject<string>(initialRoute);
		this.currentRoute = initialRoute;
		this.initialRoute = initialRoute;
		this.$rootNode = document.querySelector('#root')!;
		this.hasBeenInitialized = false;
	}

	private getComponent(route: string): Component<void> {
		const componentIndex = this.routes.findIndex((r) => {
			return r.route === route;
		});
		return componentIndex < 0
			? () => document.createElement('section')
			: this.routes[componentIndex].component;
	}

	private setUpListeners() {
		window.addEventListener('load', () => {
			if (location.hash === '') {
				location.hash = `/${this.initialRoute}`;
			}
			this.route$.next(this.normalizeRoute(location.hash));
		});
		window.addEventListener('hashchange', () =>
			this.route$.next(this.normalizeRoute(location.hash))
		);
		this.route$.subscribe((route) => {
			this.currentRoute = route;
			this.updateUI(route);
		});
	}

	private normalizeRoute(route: string): string {
		return route.replaceAll(/#\//gm, '');
	}

	private updateUI(route: string) {
		const renderComponent = this.getComponent(this.currentRoute);
		this.$rootNode.innerHTML = '';
		this.$rootNode.appendChild(renderComponent());
	}

	public setUpInitialRoute(redirectTo: string) {
		this.initialRoute = redirectTo;
	}

	public setUpRoutes(routes: Routes) {
		if (!this.hasBeenInitialized) {
			this.routes = routes;
			this.setUpListeners();
			this.hasBeenInitialized = true;
		}
	}

	public getRoute() {
		return this.route$.asObservable();
	}

	public updateRoute(newRoute: string): void {
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
