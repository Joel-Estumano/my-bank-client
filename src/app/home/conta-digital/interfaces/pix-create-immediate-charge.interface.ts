import { FormGroup, Validators } from "@angular/forms"

const chave = "f905e481-559c-4fe5-b57a-e2662ec5578a" //chave de recebimento pix da conta na gerencianet

export class PixCreateImmediateCharge {

    calendario: any = null
    devedor: any = null
    valor: any = null
    chave: string | null = chave


    public createForm() {
        return {
            cpf: [null, [Validators.required]],
            nome: [null, [Validators.required]],
            original: [null, [Validators.required]],
            chave: ["f905e481-559c-4fe5-b57a-e2662ec5578a", [Validators.required]]
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
            original: (form.value.original).toString()
        }
        this.chave = form.value.chave
    }

}