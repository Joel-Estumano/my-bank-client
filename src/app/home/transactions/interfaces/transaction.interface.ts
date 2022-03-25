import { FormGroup, Validators } from "@angular/forms"

export class Transaction {

    name: string | null = null

    public createFormTransaction() {
        return {
            name: [this.name, Validators.required],
        }
    }

    public getFormValuesTransaction(form: FormGroup) {
        this.name = form.value.name
    }

}