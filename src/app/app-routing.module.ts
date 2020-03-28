import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductNewsComponent } from "./product-news/product-news.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductAddComponent } from "./product-add/product-add.component";



const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "product-list", component: ProductListComponent },
  { path: "product-manager", component: ProductManagerComponent },
  { path: "product-add", component: ProductAddComponent },
  { path: "product/:productID", component: ProductDetailComponent },
  { path: "news", component: ProductNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
