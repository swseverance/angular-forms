import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl, AsyncValidator } from '@angular/forms';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * this directive validates a form control by checking if it's value
 * is equal to 'bob'
 */
@Directive({
  selector: '[appSimpleAsyncValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: SimpleAsyncValidatorDirective,
      multi: true
    }
  ]
})
export class SimpleAsyncValidatorDirective implements AsyncValidator {
  onValidatorInputChange: Function;

  validate(control: AbstractControl) {
    const result = control.value === 'bob' ? { invalidName: true } : null;

    return of(result).pipe(delay(2000));
  }

  /**
   * Each time SimpleAsyncValidatorDirective is instantiated
   * Angular will pass in a function `fn` to `registerOnValidatorChange`.
   * It's our responsibility to store a reference to `fn` and invoke it
   * if an input binding of SimpleAsyncValidatorDirective changes. This
   * is done to let Angular know to perform another round of validation checks.
   *
   * However, SimpleAsyncValidatorDirective has no input bindings, so we don't need
   * to worry about ever invoking `fn`
   */
  registerOnValidatorChange(fn) {
    this.onValidatorInputChange = fn;
  }
}
