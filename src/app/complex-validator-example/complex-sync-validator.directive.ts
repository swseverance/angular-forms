import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors,
  Validator
} from '@angular/forms';

/**
 * this directive validates a form control by checking if it's value
 * is equal to the value of the `invalidName` input
 */
@Directive({
  selector: '[appComplexSyncValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ComplexSyncValidatorDirective,
      multi: true
    }
  ]
})
export class ComplexSyncValidatorDirective implements Validator {
  onValidatorInputChange: Function;

  private _invalidName: string;

  @Input() set invalidName(name: string) {
    this._invalidName = name;

    // When ComplexSyncValidatorDirective `invalidName` input binding changes
    // we invoke `onValidatorInputChange()`
    if (this.onValidatorInputChange && name) {
      this.onValidatorInputChange();
    }
  }

  get invalidName() {
    return this._invalidName;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value === this.invalidName ? { invalidName: true } : null;
  }

  /**
   * Each time ComplexSyncValidatorDirective is instantiated
   * Angular will pass in a function `fn` to `registerOnValidatorChange`.
   * It's our responsibility to store a reference to `fn` and invoke it
   * if an input binding of ComplexSyncValidatorDirective changes. This
   * is done to let Angular know to perform another round of validation checks.
   */
  registerOnValidatorChange(fn) {
    this.onValidatorInputChange = fn;
  }
}
