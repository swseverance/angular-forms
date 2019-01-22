import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SimpleSyncValidatorExampleComponent } from './simple-validator-example/simple-sync-validator-example.component';
import { SimpleAsyncValidatorExampleComponent } from './simple-validator-example/simple-async-validator-example.component';
import { SimpleSyncValidatorDirective } from './simple-validator-example/simple-sync-validator.directive';
import { SimpleAsyncValidatorDirective } from './simple-validator-example/simple-async-validator.directive';

import { ComplexSyncValidatorDirective } from './complex-validator-example/complex-sync-validator.directive';
import { ComplexSyncValidatorExampleComponent } from './complex-validator-example/complex-sync-validator-example.component';
import { ValidationWithFunctionsComponent } from './validation-with-functions/validation-with-functions.component';
import {
  CounterComponent,
  CounterComponentExampleComponent
} from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSyncValidatorExampleComponent,
    SimpleAsyncValidatorExampleComponent,
    SimpleSyncValidatorDirective,
    SimpleAsyncValidatorDirective,
    ComplexSyncValidatorDirective,
    ComplexSyncValidatorExampleComponent,
    ValidationWithFunctionsComponent,
    CounterComponent,
    CounterComponentExampleComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
