import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlyMealComponent } from './elderly-meal.component';

describe('ElderlyMealComponent', () => {
  let component: ElderlyMealComponent;
  let fixture: ComponentFixture<ElderlyMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderlyMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderlyMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
