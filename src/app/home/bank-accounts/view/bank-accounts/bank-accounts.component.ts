import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { QueryPageService } from 'src/app/core/services/query-page.service';
import { BankAccount } from '../../interfaces/bank-account.interface';
import { BamkAccountsService } from '../../services/bank-account.service';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss']
})
export class BankAccountsComponent implements OnInit {

  public bankAccounts: BankAccount[]
  public idUser: string | null
  public filters: {
    user: { _id: string | null }
  }

  constructor(private readonly bamkAccountsService: BamkAccountsService,
    private readonly queryPageService: QueryPageService,
    private readonly router: Router) {

    this.bankAccounts = []
    this.idUser = '623e42341cf3766b5dbc41e5' // otario35@gmail.com senha
    this.filters = {
      user: { _id: this.idUser }
    }
  }

  ngOnInit(): void {
    this.goToSearch();
  }


  public goToSearch() {
    this.search(this.queryPageService.createQueryPage(this.filters));
  }

  public search(queryes?: any) {
    this.bamkAccountsService.search(queryes).subscribe(response => {
      this.bankAccounts = response.results;
      console.log(this.bankAccounts);
    });
  }

  goToTransactions(account: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        account: account
      }
    }
    this.router.navigate(['/home/transactions'], navigationExtras)
  }

  goToOperations(account: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        account: account
      }
    }
    this.router.navigate(['/home/transactions/operations'], navigationExtras)
  }

}
