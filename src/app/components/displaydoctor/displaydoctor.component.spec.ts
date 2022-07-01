import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydoctorComponent } from './displaydoctor.component';

describe('DisplaydoctorComponent', () => {
  let component: DisplaydoctorComponent;
  let fixture: ComponentFixture<DisplaydoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaydoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
