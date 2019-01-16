import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-sync-validator-example',
  templateUrl: './simple-sync-validator-example.component.html',
  styleUrls: ['./simple-sync-validator-example.component.css']
})
export class SimpleSyncValidatorExampleComponent {
  name = new FormControl();
}
