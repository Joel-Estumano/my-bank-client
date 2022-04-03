import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ClipboardService } from 'ngx-clipboard';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-qrcode-view',
  templateUrl: './qrcode-view.component.html',
  styleUrls: ['./qrcode-view.component.scss']
})
export class QrcodeViewComponent implements OnInit {

  @Input() qrcodeImagem: string = ''
  @Input() copiaecola: string = ''
  @Input() valor: string = ''
  @Input() expiracao: string = ''

  events: Subscription[] = [];

  constructor(public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private changeDetection: ChangeDetectorRef,
    private readonly clipboardService: ClipboardService,
    private readonly router: Router) { }

  ngOnInit(): void {

    /* const _combine = combineLatest(
        this.modalService.onShow,
        this.modalService.onShown,
        this.modalService.onHide,
      this.modalService.onHidden
    ).subscribe(() => this.changeDetection.markForCheck()); */

    // this.events.push(_combine);
    this.events.push(
      this.modalService.onHidden.subscribe((reason: string) => {
        const _reason = reason ? `, dismissed by ${reason}` : '';
        this.unsubscribe();
        this.onClose()
      })
    );
  }

  unsubscribe() {
    this.events.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.events = [];
  }

  onClose() {
    this.bsModalRef.hide()
    this.router.navigate(['/conta-digital']);
  }

  copy() {
    this.clipboardService.copyFromContent(this.copiaecola)
  }
}