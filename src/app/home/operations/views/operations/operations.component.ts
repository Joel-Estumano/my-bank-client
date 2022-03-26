import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  public readonly OPTIONS_DESCRIPTION_TRANSACTION = Transaction.OPTIONS_DESCRIPTION_TRANSACTION;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  send() {

  }

  back() {
    this.router.navigate(['home/bank-accounts'])
  }

}
