import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFieldMainComponent } from './settings-field-main.component';

describe('SettingsFieldMainComponent', () => {
  let component: SettingsFieldMainComponent;
  let fixture: ComponentFixture<SettingsFieldMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsFieldMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsFieldMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
