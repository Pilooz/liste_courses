import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlyListComponent } from './elderly-list.component';

describe('ElderlyListComponent', () => {
  let component: ElderlyListComponent;
  let fixture: ComponentFixture<ElderlyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderlyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderlyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
