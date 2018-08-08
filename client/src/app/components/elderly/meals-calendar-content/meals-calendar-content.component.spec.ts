import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsCalendarContentComponent } from './meals-calendar-content.component';

describe('MealsCalendarContentComponent', () => {
  let component: MealsCalendarContentComponent;
  let fixture: ComponentFixture<MealsCalendarContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsCalendarContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsCalendarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
