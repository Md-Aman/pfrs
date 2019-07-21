import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { SearchFoodComponent } from './core/search-food/search-food.component';

const secureRoutes: Routes = [
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule',
    data: { preload: true, delay: false }
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
    data: { preload: true, delay: false }
  },
  { path: '', redirectTo: 'search-food', pathMatch: "full" }
];


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search-food', component: SearchFoodComponent },
  { path: '', redirectTo: '/search-food', pathMatch: 'full' },
  ...secureRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
