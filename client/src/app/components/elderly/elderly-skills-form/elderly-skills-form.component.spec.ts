import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlySkillsFormComponent } from './elderly-skills-form.component';

describe('ElderlySkillsFormComponent', () => {
  let component: ElderlySkillsFormComponent;
  let fixture: ComponentFixture<ElderlySkillsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderlySkillsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderlySkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
