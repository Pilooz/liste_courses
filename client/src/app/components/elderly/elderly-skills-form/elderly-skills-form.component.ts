import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash'
import { SkillService } from '../../../services/skill.service';
import { ElderlyClass } from '../../../domain/elderly.class';
import { SkillClass } from '../../../domain/skill.class';
import { ElderlySkillService } from '../../../services/elderly-skill.service';

@Component({
  selector: 'app-elderly-skills-form',
  templateUrl: './elderly-skills-form.component.html',
  styleUrls: ['./elderly-skills-form.component.css']
})
export class ElderlySkillsFormComponent implements OnInit {

  public elderly: ElderlyClass;
  public skills: SkillClass[];

  constructor(
    private skillService: SkillService,
    private elderlySkillService: ElderlySkillService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.elderly = this.route.snapshot.data['elderly'];
    this.loadSkills();
  }

  loadSkills() {
    this.skillService.getAll().subscribe(skills => {
      this.skills = _.differenceBy(skills, this.elderly.skills, 'id');
    }, err => {
      console.error(err);
    });
  }

  addSkill(skill) {
    _.remove(this.skills, { id: skill.id });
    this.elderly.skills.splice(_.sortedIndexBy(this.elderly.skills, skill, 'label'), 0, skill);
    this.elderlySkillService.putElderlySkill(this.elderly.id, skill.id).subscribe(() => {
      // Enregistré.
    }, err => {
      console.error(err);
    });
  }

  removeSkill(skill) {
    _.remove(this.elderly.skills, { id: skill.id });
    this.skills.splice(_.sortedIndexBy(this.skills, skill, 'label'), 0, skill);
    this.elderlySkillService.deleteElderlySkill(this.elderly.id, skill.id).subscribe(() => {
      // Enregistré.
    }, err => {
      console.error(err);
    });
  }
}
