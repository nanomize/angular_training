import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";


export const route: Route [] = [
    { path: 'welcome', component: HomeComponent},
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent},
    { path: 'products',
        loadChildren: () => import('./products/product.module')
                .then(m => m.ProductModule)}
]

export const routeModule = RouterModule.forRoot(route, {useHash: false});