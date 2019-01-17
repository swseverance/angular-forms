import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-sync-validator-example',
  templateUrl: './simple-sync-validator-example.component.html',
})
export class SimpleSyncValidatorExampleComponent {
  name = new FormControl();
}
