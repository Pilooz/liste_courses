import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlyCookingImplicationComponent } from './elderly-cooking-implication.component';

describe('ElderlyCookingImplicationComponent', () => {
  let component: ElderlyCookingImplicationComponent;
  let fixture: ComponentFixture<ElderlyCookingImplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderlyCookingImplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderlyCookingImplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
