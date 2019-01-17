import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';

/**
 * this directive validates a form control by checking if it's value
 * is equal to 'bob'
 */
@Directive({
  selector: '[appSimpleSyncValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SimpleSyncValidatorDirective,
      multi: true
    }
  ]
})
export class SimpleSyncValidatorDirective implements Validator {
  onValidatorInputChange: Function;

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value === 'bob'
      ? { invalidName: true }
      : null;
  }

  /**
   * Each time SimpleSyncValidatorDirective is instantiated
   * Angular will pass in a function `fn` to `registerOnValidatorChange`.
   * It's our responsibility to store a reference to `fn` and invoke it
   * if an input binding of SimpleSyncValidatorDirective changes. This
   * is done to let Angular know to perform another round of validation checks.
   *
   * However, SimpleSyncValidatorDirective has no input bindings, so we don't need
   * to worry about ever invoking `fn`
   */
  registerOnValidatorChange(fn) {
    this.onValidatorInputChange = fn;
  }
}
