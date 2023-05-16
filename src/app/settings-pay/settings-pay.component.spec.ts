import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPayComponent } from './settings-pay.component';

describe('SettingsPayComponent', () => {
  let component: SettingsPayComponent;
  let fixture: ComponentFixture<SettingsPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
