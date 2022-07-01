import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudhospitalComponent } from './rudhospital.component';

describe('RudhospitalComponent', () => {
  let component: RudhospitalComponent;
  let fixture: ComponentFixture<RudhospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RudhospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RudhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
