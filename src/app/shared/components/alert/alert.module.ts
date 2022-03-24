import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast/toast.service';

@NgModule({
  declarations: [
    AlertComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    AlertComponent,
    ToastComponent
  ],
  providers:[ToastService]
})
export class AlertModule { }
