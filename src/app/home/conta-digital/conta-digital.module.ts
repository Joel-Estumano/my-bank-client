import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaDigitalComponent } from './views/conta-digital/conta-digital.component';
import { ContaDigitalRoutingModule } from './conta-digital-routing.module';
import { GerarCobrancaComponent } from './views/gerar-cobranca/gerar-cobranca.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContaDigitalService } from './services/conta-digital.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QrcodeViewComponent } from './views/qrcode-view/qrcode-view.component';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    ContaDigitalComponent,
    GerarCobrancaComponent,
    QrcodeViewComponent
  ],
  imports: [
    CommonModule,
    ContaDigitalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxCurrencyModule
  ],
  providers: [ContaDigitalService]
})
export class ContaDigitalModule { }