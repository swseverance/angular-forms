import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-async-validator-example',
  templateUrl: './simple-async-validator-example.component.html',
})
export class SimpleAsyncValidatorExampleComponent {
  name = new FormControl();
}
