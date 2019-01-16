import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSyncValidatorExampleComponent } from './simple-sync-validator-example.component';

describe('SimpleSyncValidatorExampleComponent', () => {
  let component: SimpleSyncValidatorExampleComponent;
  let fixture: ComponentFixture<SimpleSyncValidatorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSyncValidatorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSyncValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
