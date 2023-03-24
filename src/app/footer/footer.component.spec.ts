import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuiButtonExample1 } from './footer.component';

describe('TuiButtonExample1', () => {
  let component: TuiButtonExample1;
  let fixture: ComponentFixture<TuiButtonExample1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuiButtonExample1]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TuiButtonExample1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
