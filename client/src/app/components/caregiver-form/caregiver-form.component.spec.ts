import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverFormComponent } from './caregiver-form.component';

describe('CaregiverFormComponent', () => {
  let component: CaregiverFormComponent;
  let fixture: ComponentFixture<CaregiverFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiverFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
