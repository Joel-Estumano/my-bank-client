import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueryPageService } from 'src/app/core/services/query-page.service';
import { Transaction } from '../../interfaces/transaction.interface';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public transactions: Transaction[]
  public filters = {

  }

  constructor(private readonly transactionsService: TransactionsService,
    private readonly queryPageService: QueryPageService,
    private readonly router: Router) {

    this.transactions = []
  }

  ngOnInit(): void {
    this.goToSearch()
  }

  public goToSearch() {
    this.search(this.queryPageService.createQueryPage(this.filters));
  }

  public search(queryes?: any) {
    this.transactionsService.search(queryes).subscribe(response => {
      this.transactions = response.results;
      console.log('#transactions: ', this.transactions);
    });
  }

  back() {
    this.router.navigate(['home/bank-accounts'])
  }

  getLabelTransactionType(id: number | null = 0): string {
    return Transaction.getLabelTransactionType(id)
  }

  getLabelTransactionDescription(id: number | null = 0): string {
    return Transaction.getLabelTransactionDescription(id)
  }

}
