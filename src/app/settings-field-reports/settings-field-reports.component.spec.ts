import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFieldReportsComponent } from './settings-field-reports.component';

describe('SettingsFieldReportsComponent', () => {
  let component: SettingsFieldReportsComponent;
  let fixture: ComponentFixture<SettingsFieldReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsFieldReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsFieldReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
