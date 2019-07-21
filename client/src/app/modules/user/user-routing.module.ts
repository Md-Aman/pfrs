import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultComponent } from './search-result/search-result.component';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmPageComponent } from './order-confirm-page/order-confirm-page.component';

const routes: Routes = [
  { path: 'search-result', component: SearchResultComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-confirm', component: OrderConfirmPageComponent },
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
  { path: '', redirectTo: 'search-result' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
