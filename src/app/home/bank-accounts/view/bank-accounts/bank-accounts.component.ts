import { Component, OnInit } from '@angular/core';
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
  public idBankAccount: string | null
  public filters: {
    user: { _id: string | null }
  }

  constructor(private readonly bamkAccountsService: BamkAccountsService,
    private readonly queryPageService: QueryPageService) {
    this.bankAccounts = []
    this.idBankAccount = "623caf42e0c2c4c1ebdb77e8"
    this.filters = {
      user: { _id: this.idBankAccount }
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
      this.bankAccounts = response;
      console.log(this.bankAccounts);
    });
  }

}
