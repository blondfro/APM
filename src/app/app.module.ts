import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import {WelcomeComponent} from './home/welcome.component';

import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import {ProductService} from './products/product.service';





@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent },
      {path: 'products/:id', component: ProductListComponent },
      {path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
