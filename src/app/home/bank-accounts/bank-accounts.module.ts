import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bankAccountsRoutingModule } from './bank-accounts-routing.module';
import { BankAccountsComponent } from './view/bank-accounts/bank-accounts.component';
import { BamkAccountsService } from './services/bank-account.service';

@NgModule({
  declarations: [
    BankAccountsComponent
  ],
  imports: [
    CommonModule,
    bankAccountsRoutingModule
  ],
  providers: [
    BamkAccountsService
  ]
})
export class BankAccountsModule { }
