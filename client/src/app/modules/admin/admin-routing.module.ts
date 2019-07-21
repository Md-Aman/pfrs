import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminIndividualItemComponent } from './admin-individual-item/admin-individual-item.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserListComponent } from './/user-list/user-list.component';

const routes: Routes = [
  { path: 'add-food', component: AdminIndividualItemComponent },
  { path: 'orders', component: UserOrdersComponent },
  { path: 'users', component: UserListComponent },
  // {
  //   path: 'create', component: PageComponent,
  //   children: [
  //     { path: 'ra-details', component: RaDetailsComponent },
  //     { path: 'ra-details/:templateId', component: RaDetailsComponent },
  //     { path: 'ra-details/:templateId/:raId', component: RaDetailsComponent },
  //     { path: 'country-profile/:templateId/:raId/:countryIds', component: CountryProfileComponent },
  //     { path: 'risk-mitigation/:templateId/:raId', component: RiskMitigationComponent },
  //     { path: 'supplier/:templateId/:raId', component: SupplierComponent },
  //     { path: 'communication/:templateId/:raId', component: CommunicationComponent },
  //     { path: 'contingency/:templateId/:raId', component: ContingencyComponent },
  //     { path: 'other-details/:templateId/:raId', component: OtherDetailsComponent },

  //     { path: '', redirectTo: 'create/ra-details' }
  //   ],
  // },
  { path: '', redirectTo: 'add-food' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
