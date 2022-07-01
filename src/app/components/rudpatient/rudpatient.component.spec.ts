import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RUDpatientComponent } from './rudpatient.component';

describe('RUDpatientComponent', () => {
  let component: RUDpatientComponent;
  let fixture: ComponentFixture<RUDpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RUDpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RUDpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
