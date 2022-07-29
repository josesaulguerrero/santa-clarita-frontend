import { IRoute } from './../types/common/Router';
import { Routes } from '../types/common/Router';
import { BehaviorSubject } from 'rxjs';

export class Router {
	private routes: Routes;
	private static instance: Router;
	public routeHash$: BehaviorSubject<string>;

	private constructor() {
		this.routes = [];
		this.routeHash$ = new BehaviorSubject<string>('#');
		this.routeHash$.subscribe((hash) => {
			location.hash = hash;
		});
	}

	public addRoute(route: IRoute) {
		this.routes.push(route);
	}

	public getHash() {
		return this.routeHash$.asObservable;
	}

	public updateHash(newHash: string): void {
		this.routeHash$.next(newHash);
	}

	public static getInstance = (): Router => {
		if (!Router.instance) {
			Router.instance = new Router();
		}
		return Router.instance;
	};
}
