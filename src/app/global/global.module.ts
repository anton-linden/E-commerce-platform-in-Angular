import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GlobalModule {
  constructor(@Inject(String) public GlobalUsername: string) {}
}
