import { Component } from './Component';
export interface IRoute {
	route: string;
	component: Component<any>;
}

export type Routes = IRoute[];
