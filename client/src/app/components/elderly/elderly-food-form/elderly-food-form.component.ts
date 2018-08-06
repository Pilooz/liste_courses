import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElderlyClass } from '../../../domain/elderly.class';
import { FormGroup, FormControl } from '@angular/forms';
import { ElderlyService } from '../../../services/elderly.service';

@Component({
  selector: 'app-elderly-food-form',
  templateUrl: './elderly-food-form.component.html',
  styleUrls: ['./elderly-food-form.component.css']
})
export class ElderlyFoodFormComponent implements OnInit {

  public elderly: ElderlyClass;
  public profileFoodForm: FormGroup;
  public showInfo: boolean;
  public showInfoConfirm: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private elderlyService: ElderlyService) {
    this.showInfo = this.route.snapshot.queryParamMap.get('showInfo') === 'true';
    this.elderly = this.route.snapshot.data['elderly'];
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.profileFoodForm = new FormGroup({
      'allergies': new FormControl(this.elderly.allergies),
      'restrictions': new FormControl(this.elderly.restrictions),
      'likes': new FormControl(this.elderly.likes),
      'dislikes': new FormControl(this.elderly.dislikes),
      'habits': new FormControl(this.elderly.habits)
    });
  }

  public submitForm(value) {
    Object.assign(this.elderly, value);
    this.elderlyService.update(this.elderly).subscribe((elderly) => {
      Object.assign(this.elderly, elderly);
      if (this.route.snapshot.queryParamMap.get('showInfo') === 'true') {
        this.showInfoConfirm = true;
      } else {
        this.router.navigate(['/elderly', this.elderly.id, 'skills']);
      }
    });
  }

}
