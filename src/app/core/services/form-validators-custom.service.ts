import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class FormValidatorsCustom {

    static isAboveZero(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (value === null) { return null; }
            if (isNaN(control.value)) {
                return { 'NaN': true };
            }
            if (value == 0) {
                return { 'NaN': true };
            }
            return null;
        }
    }

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

}