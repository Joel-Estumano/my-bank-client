import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './views/operations/operations.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { OperationsRoutingModule } from './operations-routing.module';
import { TransactionsService } from './services/transactions.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TransactionsComponent,
    OperationsComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    TransactionsService
  ]
})
export class OperationsModule { }
