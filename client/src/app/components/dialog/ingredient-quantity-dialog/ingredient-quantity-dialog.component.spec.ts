import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientQuantityDialogComponent } from './ingredient-quantity-dialog.component';

describe('IngredientQuantityDialogComponent', () => {
  let component: IngredientQuantityDialogComponent;
  let fixture: ComponentFixture<IngredientQuantityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientQuantityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientQuantityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
