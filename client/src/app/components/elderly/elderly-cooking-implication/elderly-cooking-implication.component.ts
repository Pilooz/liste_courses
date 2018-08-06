import { Component, OnInit } from '@angular/core';
import { CookingImplicationType } from '../../../enum/cooking-implication-type.enum';
import { ElderlyClass } from '../../../domain/elderly.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ElderlyService } from '../../../services/elderly.service';

@Component({
  selector: 'app-elderly-cooking-implication',
  templateUrl: './elderly-cooking-implication.component.html',
  styleUrls: ['./elderly-cooking-implication.component.css']
})
export class ElderlyCookingImplicationComponent implements OnInit {

  public elderly: ElderlyClass;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private elderlyService: ElderlyService) {
    this.elderly = this.route.snapshot.data['elderly'];
  }

  ngOnInit() {
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
    this.elderlyService.update(this.elderly).subscribe((elderly) => {
      Object.assign(this.elderly, elderly);
      switch (this.elderly.cookingImplication) {
        case CookingImplicationType.YES:
        case CookingImplicationType.SOMETIMES:
          return this.router.navigate(['/elderly', this.elderly.id, 'skills']);
        default:
          return this.router.navigate([]); // TODO redirect to "How many of your close family go shopping for you ?"
      }
    });
  }

}
