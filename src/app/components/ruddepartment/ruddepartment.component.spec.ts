import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RUDdepartmentComponent } from './ruddepartment.component';

describe('RUDdepartmentComponent', () => {
  let component: RUDdepartmentComponent;
  let fixture: ComponentFixture<RUDdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RUDdepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RUDdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
