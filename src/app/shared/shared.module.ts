import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './components/navbar/navbar.module';
import { AlertModule } from './components/alerts/alert.module';
import { DataPrazoPipe } from './pipes/data-prazo.pipe';

@NgModule({
  declarations: [
    DataPrazoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarModule,
    AlertModule,
    DataPrazoPipe
  ]
})
export class SharedModule { }
