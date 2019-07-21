import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './../shared/shared.module';

import { AdminIndividualItemComponent } from './admin-individual-item/admin-individual-item.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserListComponent } from './/user-list/user-list.component';

@NgModule({
  declarations: [
    AdminIndividualItemComponent,
    UserOrdersComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
