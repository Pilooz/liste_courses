import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ElderlyService } from '../../../services/elderly.service';
import { HeaderService } from '../../../services/header.services';
import { AbstractElderlyModifier } from '../../abstract/abstract-elderly-modifier';

@Component({
  selector: 'app-elderly-food-form',
  templateUrl: './elderly-food-form.component.html',
  styleUrls: ['./elderly-food-form.component.css']
})
export class ElderlyFoodFormComponent extends AbstractElderlyModifier implements OnInit {

  public profileFoodForm: FormGroup;
  public showInfo: boolean;
  public showInfoConfirm: boolean = false;

  constructor(@Inject(ElderlyService) elderlyService: ElderlyService,
    @Inject(ActivatedRoute) route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    super(elderlyService, route);
    this.showInfo = this.isShowInfoUrl();
  }

  private isShowInfoUrl() {
    return this.route.snapshot.queryParamMap.get('showInfo') === 'true';
  }

  ngOnInit() {
    this.headerService.doReturn = () => {
      if (!this.isShowInfoUrl()) {
        this.router.navigate(['/elderly', this.elderly.id]);
      } else if (this.showInfoConfirm) {
        this.showInfoConfirm = false;
      } else if (!this.showInfo) {
        this.showInfo = true;
      } else {
        this.router.navigate(['/elderly', this.elderly.id]);
      }
    };
    this.headerService.showHome = true;
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
    this.save(() => {
      if (this.isShowInfoUrl()) {
        this.showInfoConfirm = true;
      } else {
        this.router.navigate(['/elderly', this.elderly.id, 'cookingImplication']);
      }
    });
  }

}
