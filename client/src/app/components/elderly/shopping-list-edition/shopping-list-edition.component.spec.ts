import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListEditionComponent } from './shopping-list-edition.component';

describe('ShoppingListEditionComponent', () => {
  let component: ShoppingListEditionComponent;
  let fixture: ComponentFixture<ShoppingListEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
