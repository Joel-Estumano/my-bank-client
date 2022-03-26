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
        { id: 1, alias: 'Deposit', label: 'Deposit' },
        { id: 2, alias: 'Plunder', label: 'Plunder' },
        { id: 3, alias: 'Transfer', label: 'Transfer' }
    ];

    static getLabelTransactionType(type: number | null) {
        switch (type) {
            case 1: return 'Incoming';
            case 2: return 'Outgoing';
            default: return 'Undefined';
        }
    }

    static getLabelTransactionDescription(type: number | null) {
        switch (type) {
            case 1: return 'Deposit';
            case 2: return 'Plunder';
            case 2: return 'Transfer';
            default: return 'Undefined';
        }
    }

}