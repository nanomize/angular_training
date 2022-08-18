import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { ProtectRouteGuard } from "./protect-route.guard";


export const route: Route [] = [
    { path: 'products', component: ProductListComponent, pathMatch: 'full'},
    { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProtectRouteGuard]},
    { path: 'welcome', component: HomeComponent},
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent},
]