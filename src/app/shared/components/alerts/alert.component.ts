import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  public modalRef?: BsModalRef;
  private subscription: Subscription;

  constructor(private alertService: AlertService,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef) {

    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert().subscribe(message => {
      switch (message && message.type) {
        case 'success':
          this.showSuccess(message)
          break;
        case 'error':
          this.showError(message)
          break;
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showSuccess(message: string) {
    this.bsModalRef = this.modalService.show(SuccessComponent, { class: 'modal-dialog modal-dialog-centered modal-dialog modal-sm' })
  }

  showError(message: string) {
    this.bsModalRef = this.modalService.show(ErrorComponent, { class: 'modal-dialog modal-dialog-centered modal-dialog modal-sm' })
  }
}