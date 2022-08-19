import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { RouterModule } from '@angular/router';
import { ProtectRouteGuard } from '../protect-route.guard';
import { SharedModule } from '../shared/shared.module';
import { ConvertToSpacePipe } from '../convert-to-space.pipe';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    NewProductComponent,
    ConvertToSpacePipe
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent, pathMatch: 'full'},
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProtectRouteGuard]},
      { path: 'product/new', component: NewProductComponent},
    ])
  ]
})
export class ProductModule { }
