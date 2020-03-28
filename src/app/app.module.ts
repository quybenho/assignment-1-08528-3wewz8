import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { NewsComponent } from './home/news/news.component';
import { ProductNewsComponent } from './product-news/product-news.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ProductListComponent, NewsComponent, ProductNewsComponent, ProductDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
