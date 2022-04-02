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
  private bankAccount: any

  public readonly OPTIONS_DESCRIPTION_TRANSACTION = Transaction.OPTIONS_DESCRIPTION_TRANSACTION;

  constructor(private readonly router: Router,
    private readonly fb: FormBuilder,
    public readonly alertService: AlertService,
    private readonly transactionsService: TransactionsService) {

    this.form = this.fb.group(this.transaction.createFormTransaction())

    if (this.router.getCurrentNavigation() != null) {
      const currentState = this.router.getCurrentNavigation()?.extras?.state
      if (!currentState?.['account']) {
        this.back()
      }
      this.bankAccount = currentState?.['account']
    }
  }

  ngOnInit(): void {
    this.form.patchValue({ "bankAccount": this.bankAccount._id })
  }

  send() {
    this.setType(this.form.value.description)
    if (FormValidatorsCustom.isValidForms(this.form)) {

      this.transaction.getFormValuesTransaction(this.form)

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

  setType(number: Number) {
    if (number == 1) {
      this.form.patchValue({ "transactionType": 1 })
    } else if (number == 2) {
      this.form.patchValue({ "transactionType": 2 })
    }
  }

 
}
