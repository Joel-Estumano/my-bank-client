import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsComponent } from './views/operations/operations.component';
import { TransactionsComponent } from './views/transactions/transactions.component';

const routes: Routes = [
    { path: '', redirectTo: 'transactions' },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'operations', component: OperationsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OperationsRoutingModule { }