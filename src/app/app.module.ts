import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleSyncValidatorExampleComponent } from './simple-sync-validator-example/simple-sync-validator-example.component';
import { SimpleSyncValidatorDirective } from './simple-sync-validator/simple-sync-validator.directive';
import { ComplexSyncValidatorDirective } from './complex-sync-validator/complex-sync-validator.directive';
import { ComplexSyncValidatorExampleComponent } from './complex-sync-validator-example/complex-sync-validator-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSyncValidatorExampleComponent,
    SimpleSyncValidatorDirective,
    ComplexSyncValidatorDirective,
    ComplexSyncValidatorExampleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
