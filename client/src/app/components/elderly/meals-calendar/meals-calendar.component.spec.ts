import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsCalendarComponent } from './meals-calendar.component';

describe('MealsCalendarComponent', () => {
  let component: MealsCalendarComponent;
  let fixture: ComponentFixture<MealsCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
