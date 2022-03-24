import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './components/navbar/navbar.module';
import { AlertModule } from './components/alert/alert.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarModule,
    AlertModule
  ]
})
export class SharedModule { }
