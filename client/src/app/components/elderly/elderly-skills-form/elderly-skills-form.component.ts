import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillService } from '../../../services/skill.service';
import { ElderlyClass } from '../../../domain/elderly.class';

@Component({
  selector: 'app-elderly-skills-form',
  templateUrl: './elderly-skills-form.component.html',
  styleUrls: ['./elderly-skills-form.component.css']
})
export class ElderlySkillsFormComponent implements OnInit {

  public elderly: ElderlyClass;
  constructor(private skillService: SkillService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.elderly = this.route.snapshot.data['elderly'];

    this.skillService.getAll().subscribe(skills => {
      console.log(skills);
    }, err => {
      console.error(err);
    });
  }

}
