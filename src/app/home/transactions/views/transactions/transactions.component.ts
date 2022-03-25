import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction.interface';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public transactions: Transaction[]

  constructor(private readonly transactionsService: TransactionsService) {
    this.transactions = []
  }

  ngOnInit(): void {
  }

  public search(queryes?: any) {
    this.transactionsService.search(queryes).subscribe(response => {
      this.transactions = response;
      console.log(this.transactions);
    });
  }

}
