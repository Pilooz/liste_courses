import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlyProfileComponent } from './elderly-profile.component';

describe('ElderlyProfileComponent', () => {
  let component: ElderlyProfileComponent;
  let fixture: ComponentFixture<ElderlyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderlyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderlyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
