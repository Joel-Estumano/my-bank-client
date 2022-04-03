import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/core/services/alert.service';
import { FormValidatorsAplyCSS } from 'src/app/core/services/form-validators-aply-css.service';
import { FormValidatorsCustom } from 'src/app/core/services/form-validators-custom.service';
import { PixCreateImmediateCharge } from '../../interfaces/pix-create-immediate-charge.interface';
import { ContaDigitalService } from '../../services/conta-digital.service';
import { QrcodeViewComponent } from '../qrcode-view/qrcode-view.component';

@Component({
  selector: 'app-gerar-cobranca',
  templateUrl: './gerar-cobranca.component.html',
  styleUrls: ['./gerar-cobranca.component.scss']
})
export class GerarCobrancaComponent implements OnInit {

  public cobranca: PixCreateImmediateCharge
  public form: FormGroup

  constructor(private readonly contaDigitalService: ContaDigitalService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly alertService: AlertService,
    public readonly formValidatorsAplyCSS: FormValidatorsAplyCSS,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef) {

    this.cobranca = new PixCreateImmediateCharge()
    this.form = this.fb.group(this.cobranca.createForm())

  }

  ngOnInit(): void {
  }

  submit() {
    if (FormValidatorsCustom.isValidForms(this.form)) {

      this.cobranca.getRawValue(this.form)
      console.log(this.cobranca)

      this.contaDigitalService.insert(this.cobranca).subscribe({
        next: (response: any) => {
          // this.alertService.success('Sucesso', JSON.stringify(response), true)
          this.showQrcodeView(response)
        },
        error: (erro) => {
          this.alertService.error('Erro', erro, true)
        },
        complete: () => { },
      })
    } else {
      this.alertService.error('Erro', 'Preencha os dados corretamente', true)
    }
  }

  goContaDigital() {
    this.router.navigate(['/conta-digital']);
  }

  private showQrcodeView(data: any) {
    console.log(data)
    this.bsModalRef = this.modalService.show(QrcodeViewComponent, { class: 'modal-dialog modal-dialog-centered modal-dialog modal-lg' })
    this.bsModalRef.content.copiaecola = data.copiaecola
    this.bsModalRef.content.qrcodeImagem = data.imagem
    this.bsModalRef.content.valor = data.valor
  }
}
