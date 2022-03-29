import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { FormValidatorsCustom } from 'src/app/core/services/form-validators-custom.service';
import { Transaction } from '../../interfaces/transaction.interface';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  public transaction: Transaction = new Transaction()
  public form: FormGroup

  public readonly OPTIONS_DESCRIPTION_TRANSACTION = Transaction.OPTIONS_DESCRIPTION_TRANSACTION;

  constructor(private readonly router: Router,
    private readonly fb: FormBuilder,
    public readonly alertService: AlertService,
    private readonly transactionsService: TransactionsService) {

    this.form = this.fb.group(this.transaction.createFormTransaction())
    
  }

  ngOnInit(): void {
  }

  send() {
    if (FormValidatorsCustom.isValidForms(this.form)) {

      Object.assign(this.transaction, this.form.getRawValue())

      console.log(this.transaction)

      this.transactionsService.insert(this.transaction).subscribe({
        next: (response: any) => {
          this.alertService.success('Sucesso', response, true)
          this.back()
        },
        error: (erro) => {
          this.alertService.error('Erro', erro, true)
        },
        complete: () => { },
      })

    } else {
      this.alertService.error('Erro', 'Preencha os dados corretamente', true)
    }
  }

  back() {
    this.router.navigate(['home/bank-accounts'])
  }

}
