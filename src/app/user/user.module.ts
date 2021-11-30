import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})

export class UserModule {
  constructor(@Inject(String) public Username: string, @Inject(String) public Password: string) {}
}
