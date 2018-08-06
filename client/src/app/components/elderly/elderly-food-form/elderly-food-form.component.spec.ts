import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlyFoodFormComponent } from './elderly-food-form.component';

describe('ElderlyFoodFormComponent', () => {
  let component: ElderlyFoodFormComponent;
  let fixture: ComponentFixture<ElderlyFoodFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderlyFoodFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderlyFoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
