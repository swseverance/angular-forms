import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-complex-sync-validator-example',
  templateUrl: './complex-sync-validator-example.component.html',
})
export class ComplexSyncValidatorExampleComponent {
  invalidName = new FormControl();
  name = new FormControl();
}
