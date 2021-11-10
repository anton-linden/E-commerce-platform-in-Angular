import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { AProductPageComponent } from './components/admin/a-product-page/a-product-page.component';
import { AHeaderComponent } from './components/admin/a-header/a-header.component';
import { ANavComponent } from './components/admin/a-nav/a-nav.component';
import { AEditComponent } from './components/admin/a-edit/a-edit.component';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    RegisterAccountComponent,
    ProductPageComponent,
    ProductViewComponent,
    AProductPageComponent,
    AHeaderComponent,
    ANavComponent,
    AEditComponent,
    PersonalInfoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
