import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlyProfileFormComponent } from './elderly-profile-form.component';

describe('ElderlyProfileFormComponent', () => {
  let component: ElderlyProfileFormComponent;
  let fixture: ComponentFixture<ElderlyProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderlyProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderlyProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
