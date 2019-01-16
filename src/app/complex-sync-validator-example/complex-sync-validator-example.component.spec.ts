import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexSyncValidatorExampleComponent } from './complex-sync-validator-example.component';

describe('ComplexSyncValidatorExampleComponent', () => {
  let component: ComplexSyncValidatorExampleComponent;
  let fixture: ComponentFixture<ComplexSyncValidatorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexSyncValidatorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexSyncValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
