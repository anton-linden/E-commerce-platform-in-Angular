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

import { AEditComponent } from './components/admin/a-edit/a-edit.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { AProductListingPageComponent } from './components/admin/a-product-listing-page/a-product-listing-page.component';

const routes: Routes = [
  {path: '', component: ProductViewComponent},
  {path: 'products', component: ProductViewComponent},
  {path: 'product-page/:id', component: ProductPageComponent},
  {path: 'sign-in-page', component: SignInComponent},
  {path: 'register-user', component: RegisterAccountComponent},
  {path: 'user-edit-page', component: PersonalInfoFormComponent},
  {path: 'user-menu', component: UserMenuComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'admin-product', component: AEditComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'admin-edit-product/:productID', component: EditProductComponent},
  {path: 'admin-product-listing-page', component: AProductListingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
