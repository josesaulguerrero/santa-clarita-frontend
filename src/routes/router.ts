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

	private constructor() {
		const initialRoute = '/';
		this.routes = [];
		this.route$ = new BehaviorSubject<string>(initialRoute);
		this.currentRoute = initialRoute;
		this.initialRoute = initialRoute;
		this.$rootNode = document.querySelector('#root')!;
	}

	private getComponent(route: string): Component<void> {
		const componentIndex = this.routes.findIndex((r) => {
			return r.route === route;
		});
		return componentIndex < 0
			? () => document.createElement('section')
			: this.routes[componentIndex].component;
	}

	private updateUI() {
		this.route$.subscribe((route) => {
			if (this.initialRoute === '/' || route !== '/') {
				location.hash = route;
				this.currentRoute = route;
				const renderComponent = this.getComponent(route);
				this.$rootNode.innerHTML = '';
				this.$rootNode.appendChild(renderComponent());
			} else {
				this.route$.next(this.initialRoute);
			}
		});
	}

	public setUpInitialRoute(redirectTo: string) {
		this.initialRoute = redirectTo;
	}

	public setUpRoutes(routes: Routes) {
		this.routes = routes;
		this.updateUI();
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
