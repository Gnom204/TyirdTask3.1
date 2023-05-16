import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFieldPaymentComponent } from './settings-field-payment.component';

describe('SettingsFieldPaymentComponent', () => {
  let component: SettingsFieldPaymentComponent;
  let fixture: ComponentFixture<SettingsFieldPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsFieldPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsFieldPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
