import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-qrcode-view',
  templateUrl: './qrcode-view.component.html',
  styleUrls: ['./qrcode-view.component.scss']
})
export class QrcodeViewComponent implements OnInit {

  @Input() qrcodeImagem: string = ''
  @Input() copiaecola: string | null = null

  constructor(public bsModalRef: BsModalRef,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  onClose() {
    this.bsModalRef.hide()
    this.router.navigate(['/conta-digital']);
  }
}