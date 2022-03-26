import { FormGroup, Validators } from "@angular/forms"

export class Transaction {

    transactionType: number | null = null
    bankAccount: string | null = null
    moveValue: number | null = null
    description: number | null = null

    createdAt: Date | null = null

    public createFormTransaction() {
        return {
            transactionType: [this.transactionType, Validators.required],
            bankAccount: [this.bankAccount, Validators.required],
            moveValue: [this.moveValue, Validators.required],
            description: [this.description, Validators.required]
        }
    }

    public getFormValuesTransaction(form: FormGroup) {
        this.transactionType = form.value.transactionType
        this.bankAccount = form.value.bankAccount
        this.moveValue = form.value.moveValue
        this.description = form.value.description
    }

    static OPTIONS_DESCRIPTION_TRANSACTION = [
        { id: 1, alias: 'PLUNDER', label: 'DEPOSIT' },
        { id: 2, alias: 'PLUNDER', label: 'PLUNDER' },
        { id: 3, alias: 'TRANSFER', label: 'TRANSFER' }
    ];

}