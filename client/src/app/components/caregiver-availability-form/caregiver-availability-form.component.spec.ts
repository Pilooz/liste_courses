import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverAvailabilityFormComponent } from './caregiver-availability-form.component';

describe('CaregiverAvailabilityFormComponent', () => {
  let component: CaregiverAvailabilityFormComponent;
  let fixture: ComponentFixture<CaregiverAvailabilityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiverAvailabilityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverAvailabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
