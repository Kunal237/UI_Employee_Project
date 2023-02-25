import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGridTableComponent } from './employee-grid-table.component';

describe('EmployeeGridTableComponent', () => {
  let component: EmployeeGridTableComponent;
  let fixture: ComponentFixture<EmployeeGridTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeGridTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeGridTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
