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
  public filters: {
    bankAccount: { _id: string | null }
  }
  private bankAccount: any | null = null

  constructor(private readonly transactionsService: TransactionsService,
    private readonly queryPageService: QueryPageService,
    private readonly router: Router) {

    if (this.router.getCurrentNavigation() != null) {
      const currentState = this.router.getCurrentNavigation()?.extras?.state
      if (!currentState?.['account']) {
        this.back()
      }
      this.bankAccount = currentState?.['account'];
    }

    this.transactions = []

    this.filters = {
      bankAccount: { _id: this.bankAccount._id }
    }
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
