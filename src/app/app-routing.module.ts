import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductViewComponent } from './components/product-view/product-view.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '', component: ProductViewComponent},
  {path: 'products', component: ProductViewComponent},
  {path: 'product-page/:id', component: ProductPageComponent},
  {path: 'sign-in-page', component: SignInComponent},
  {path: 'register-user', component: RegisterAccountComponent},
  {path: 'user-edit-page', component: PersonalInfoFormComponent},
  {path: 'user-menu', component: UserMenuComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
