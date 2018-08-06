import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../../services/skill.service';

@Component({
  selector: 'app-elderly-skills-form',
  templateUrl: './elderly-skills-form.component.html',
  styleUrls: ['./elderly-skills-form.component.css']
})
export class ElderlySkillsFormComponent implements OnInit {

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.getAll().subscribe(skills => {
      console.log(skills);
    }, err => {
      console.error(err);
    });
  }

}
