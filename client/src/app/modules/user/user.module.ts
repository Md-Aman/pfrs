import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from './../shared/shared.module';

import { SearchResultComponent } from './search-result/search-result.component';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmPageComponent } from './order-confirm-page/order-confirm-page.component';


@NgModule({
  declarations: [
    SearchResultComponent,
    CartComponent,
    OrderConfirmPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
