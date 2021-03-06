import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash'
import { SkillService } from '../../../services/skill.service';
import { SkillClass } from '../../../domain/skill.class';
import { ElderlySkillService } from '../../../services/elderly-skill.service';
import { AbstractElderlyModifier } from '../../abstract/abstract-elderly-modifier';
import { ElderlyService } from '../../../services/elderly.service';
import { HeaderService } from '../../../services/header.services';

@Component({
  selector: 'app-elderly-skills-form',
  templateUrl: './elderly-skills-form.component.html',
  styleUrls: ['./elderly-skills-form.component.css']
})
export class ElderlySkillsFormComponent extends AbstractElderlyModifier implements OnInit {

  public skills: SkillClass[];
  public showInfoConfirm: boolean = false;

  constructor(@Inject(ElderlyService) elderlyService: ElderlyService,
    @Inject(ActivatedRoute) route: ActivatedRoute,
    private router: Router,
    private elderlySkillService: ElderlySkillService,
    private headerService: HeaderService,
    private skillService: SkillService) {
    super(elderlyService, route);
  }

  ngOnInit() {
    this.headerService.doReturn = () => {
      if (this.standalone) {
        return this.router.navigate(['/elderly', this.elderly.id], { queryParams: { showSkills: true } });
      }
      if (this.showInfoConfirm) {
        this.showInfoConfirm = false;
      } else {
        this.router.navigate(['/elderly', this.elderly.id, 'cookingImplication']);
      }
    };
    this.headerService.showHome = true;
    this.headerService.showProfile = true;
    this.headerService.elderlyId = this.elderly.id;
    this.loadSkills();
  }

  private loadSkills() {
    this.skillService.getAll().subscribe(skills => {
      this.skills = _.differenceBy(skills, this.elderly.skills, 'id');
    });
  }

  public addSkill(skill: SkillClass) {
    _.remove(this.skills, { id: skill.id });
    this.elderly.skills.splice(_.sortedIndexBy(this.elderly.skills, skill, 'label'), 0, skill);
    this.elderlySkillService.putElderlySkill(this.elderly.id, skill.id).subscribe();
  }

  public removeSkill(skill: SkillClass) {
    _.remove(this.elderly.skills, { id: skill.id });
    this.skills.splice(_.sortedIndexBy(this.skills, skill, 'label'), 0, skill);
    this.elderlySkillService.deleteElderlySkill(this.elderly.id, skill.id).subscribe();
  }
}
