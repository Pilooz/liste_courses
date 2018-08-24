import { Component, OnInit, Inject } from '@angular/core';
import { CookingImplicationType } from '../../../enum/cooking-implication-type.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { ElderlyService } from '../../../services/elderly.service';
import { AbstractElderlyModifier } from '../../abstract/abstract-elderly-modifier';
import { HeaderService } from '../../../services/header.services';

@Component({
  selector: 'app-elderly-cooking-implication',
  templateUrl: './elderly-cooking-implication.component.html',
  styleUrls: ['./elderly-cooking-implication.component.css']
})
export class ElderlyCookingImplicationComponent extends AbstractElderlyModifier implements OnInit {

  constructor(@Inject(ElderlyService) elderlyService: ElderlyService,
    @Inject(ActivatedRoute) route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    super(elderlyService, route);
  }

  ngOnInit() {
    this.headerService.doReturn = () => this.router.navigate(['/elderly', this.elderly.id, 'food']);
    this.headerService.showHome = true;
    this.headerService.showProfile = true;
    this.headerService.elderlyId = this.elderly.id;
  }

  public sayYes() {
    this.setCookingImplication(CookingImplicationType.YES);
  }

  public sayNo() {
    this.setCookingImplication(CookingImplicationType.NO);
  }

  public saySometimes() {
    this.setCookingImplication(CookingImplicationType.SOMETIMES);
  }

  private setCookingImplication(cookingImplication: CookingImplicationType) {
    this.elderly.cookingImplication = cookingImplication;
    this.save(() => {
      switch (this.elderly.cookingImplication) {
        case CookingImplicationType.YES:
        case CookingImplicationType.SOMETIMES:
          return this.router.navigate(['/elderly', this.elderly.id, 'skills']);
        default:
          return this.router.navigate(['/home']); // TODO redirect to "How many of your close family go shopping for you ?"
      }
    });
  }

}
