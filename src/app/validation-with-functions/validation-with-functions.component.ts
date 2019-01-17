import { Component } from '@angular/core';
import { FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

const syncValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value || '';
  return value.length > 2 ? null : { longerNameRequired: true };
};

const asyncValidator = (
  control: AbstractControl
): Observable<ValidationErrors | null> => {
  const value = control.value || '';
  const result = control.value === 'bob' ? { invalidName: true } : null;

  return of(result).pipe(delay(2000));
};

@Component({
  selector: 'app-validation-with-functions',
  templateUrl: './validation-with-functions.component.html',
})
export class ValidationWithFunctionsComponent {
  name = new FormControl(null, syncValidator, asyncValidator);
}
