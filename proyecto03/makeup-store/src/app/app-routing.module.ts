import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ShopComponent} from "./shop/shop.component";
import {ProductInfoComponent} from "./product-info/product-info.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "shop", component: ShopComponent },
  { path: "cart", component: CartComponent },
  {path:'productInfo/:id',component:ProductInfoComponent},
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
