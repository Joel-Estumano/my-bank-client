import { FormGroup, Validators } from "@angular/forms"
import { FormValidatorsCustom } from "src/app/core/services/form-validators-custom.service"

export class PixCreateImmediateCharge {

    calendario: any = null
    devedor: any = null
    valor: any = null

    public createForm() {
        return {
            cpf: [null, [Validators.required]],
            nome: [null, [Validators.required]],
            original: [null, [FormValidatorsCustom.isAboveZero()]]
        }
    }

    public getRawValue(form: FormGroup) {
        this.calendario = {
            expiracao: 3600
        }

        this.devedor = {
            cpf: (form.value.cpf).replace(/\D/g, ''),
            nome: form.value.nome
        }
        this.valor = {
            original: ((form.value.original).toFixed(2)).toString()
        }
    }

}