import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import {routeModule } from './routes';
import { ContentComponent } from './content/content.component';
import { ProtectRouteGuard } from './protect-route.guard';
import { ProductService } from './products/product.service';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ContentComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductModule,
    routeModule
  ],

  providers: [{provide: ProductService, useClass: ProductService}, ProtectRouteGuard],
  bootstrap: [NavbarComponent,ContentComponent,FooterComponent]
})
export class AppModule { }
