import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './views/operations/operations.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { OperationsRoutingModule } from './operations-routing.module';
import { TransactionsService } from './services/transactions.service';

@NgModule({
  declarations: [
    TransactionsComponent,
    OperationsComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule
  ],
  providers: [
    TransactionsService
  ]
})
export class OperationsModule { }
