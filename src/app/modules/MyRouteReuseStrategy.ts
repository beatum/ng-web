import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class MyRouteReuseStrategy implements RouteReuseStrategy {

    public static handlers: { [key: string]: DetachedRouteHandle } = {};

    //Retrieves the previously stored route
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        let path: any = route.routeConfig?.path;
        return route.routeConfig ? MyRouteReuseStrategy.handlers[path] : null;
    }

    //Determines if this route (and its subtree) should be reattached
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
        let path: any = route.routeConfig?.path;
        return (route.routeConfig != null) && (MyRouteReuseStrategy.handlers[path] != null);
    }

    // Determines if this route (and its subtree) should be detached to be reused later
    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        let routeConfig: any = route.routeConfig;
        return (route.routeConfig != null) && (route.routeConfig.data != null) && (routeConfig.data.useCache != null) && (routeConfig.data.useCache);
    }

    //Determines if a route should be reused
    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }

    //Stores the detached route.
    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        let path: any = route.routeConfig?.path;
        let myhandle: any = handle;
        MyRouteReuseStrategy.handlers[path] = myhandle;
    }

}
