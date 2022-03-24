import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: []
})
export class AlertComponent implements OnInit {

  private subscription: Subscription;

  constructor(private readonly alertService: AlertService,
    private readonly toastService: ToastService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert().subscribe(alert => {
      switch (alert && alert.type) {
        case 'toast-success':
          this.showToastSuccess(alert)
          break;

        case 'toast-error':
          this.showToastError(alert)
          break;
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showToastSuccess(alert: any) {
    this.toastService.show(alert.message ? alert.message : 'Successfully done.', {
      classname: 'bg-success text-light',
      delay: 2000,
      autohide: true,
      headertext: alert.title ? alert.title : 'Successfully!'
    });
  }

  showToastError(alert: any) {
    this.toastService.show(alert.message ? alert.message : 'An error has occurred.', {
      classname: 'bg-danger text-light',
      delay: 2000,
      autohide: true,
      headertext: alert.title ? alert.title : 'Erro!'
    });
  }
  
}