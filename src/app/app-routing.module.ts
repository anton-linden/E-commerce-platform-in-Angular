import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductViewComponent } from './components/product-view/product-view.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';

const routes: Routes = [
  {path: '', component: ProductViewComponent},
  {path: 'products', component: ProductViewComponent},
  {path: 'product-page', component: ProductPageComponent},
  {path: 'sign-in-page', component: SignInComponent},
  {path: 'register-user', component: RegisterAccountComponent},
  {path: 'user-edit-page', component: PersonalInfoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
