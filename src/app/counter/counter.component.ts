import {
  Component,
  forwardRef,
  StaticProvider,
  ElementRef,
  Renderer2,
  Input
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  Validator,
  NG_VALIDATORS,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-counter-example',
  template: `
    <h3>Custom Form Control With Validation</h3>

    <hr />

    <div>
      <p>
        A counter form control with validation that marks odd numbers as
        invalid
      </p>

      <app-counter [formControl]="fc"></app-counter>

      <div style="margin-top: 2em">
        <button (click)="fc.disabled ? fc.enable() : fc.disable()">
          {{ fc.disabled ? 'Enable Counter' : 'Disable Counter' }}
        </button>
        <button (click)="fc.reset(0)">
          Reset Counter
        </button>
      </div>

      <ul>
        <li>Value: {{ fc.value }}</li>
        <li>
          Pending:
          <span *ngIf="fc.pending; else notPending" style="color: red">
            true, async validation is pending
          </span>
          <ng-template #notPending>false</ng-template>
        </li>
        <li>Status: {{ fc.status }}</li>
        <li>Errors: {{ fc.errors | json }}</li>
        <li>Pristine: {{ fc.pristine }}</li>
        <li>Touched: {{ fc.touched }}</li>
      </ul>
    </div>
  `
})
export class CounterComponentExampleComponent {
  fc = new FormControl(7);
}

const COUNTER_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CounterComponent),
  multi: true
};

const COUNTER_VALIDATORS: StaticProvider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CounterComponent),
  multi: true
};

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [COUNTER_VALUE_ACCESSOR, COUNTER_VALIDATORS]
})
export class CounterComponent implements ControlValueAccessor, Validator {
  count: number;

  @Input() disabled: boolean;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  // view -> model
  onChange = (_: any) => {};

  // call on the equivalent of blur
  onTouched = () => {};

  // model --> view
  writeValue(value: number): void {
    this.count = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;

    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'disabled',
      isDisabled
    );
  }

  decrement() {
    this.count--;

    this.onChange(this.count);
    this.onTouched();
  }

  increment() {
    this.count++;

    this.onChange(this.count);
    this.onTouched();
  }

  validate(control: AbstractControl) {
    return control.value % 2 === 1 ? { isOdd: true } : null;
  }

  /**
   * `registerOnValidatorChange` not required here because changes to
   * the input properties of this component do not require that validation
   * be run again
   */
  // registerOnValidatorChange(fn: any) {}
}
