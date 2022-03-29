import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class FormValidatorsCustom {

    static isValidForms(...forms: FormGroup[]): any {
        let invalidsControls: string[] = [];
        forms.forEach(form => {
            if (!form.valid) {
                Object.keys(form.controls).forEach(control => {
                    const f = form.get(control);
                    if (f) {
                        f.markAsDirty();
                        invalidsControls.push(control);
                    }
                });
            }
        })
        if (invalidsControls.length > 0) {
            return false;
        } else {
            return true;
        }
    }

    static errorValidatos(balance: number): ValidatorFn {
        console.log(balance)
        return (control: AbstractControl): ValidationErrors | null => {
          const value = control.value;
          console.log(value)
          if (!value) {
            return null;
          }
          if (isNaN(value) || value > balance.toFixed(2)) {
            return { 'NaN': true };
          }
          return null;
        }
      }

}