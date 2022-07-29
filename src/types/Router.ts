export interface IRoute {
	route: string;
	component: unknown; //TODO replace unknown by component type
}

export type Routes = IRoute[];
