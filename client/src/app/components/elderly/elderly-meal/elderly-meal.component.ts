import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

// Classes
import { MealClass } from '../../../domain/meal.class';

// Services
import { ElderlyMealService } from '../../../services/elderly-meal.service';
import { HeaderService } from '../../../services/header.services';

@Component({
  selector: 'app-elderly-meal',
  templateUrl: './elderly-meal.component.html',
  styleUrls: ['./elderly-meal.component.css']
})
export class ElderlyMealComponent implements OnInit {

  @Input() public meal: MealClass;
  @Input() public startDate: Date;
  @Input() public endDate: Date;
  @Input() public viewOnly: boolean = false;
  @Output() public closeMeal: EventEmitter<MealClass> = new EventEmitter<MealClass>();

  constructor(
    private headerService: HeaderService,
    private elderlyMealService: ElderlyMealService,
    private router: Router) { }

  ngOnInit() {
    this.headerService.doReturn = () => {
      this.closeMeal.emit(this.meal);
    };
    this.headerService.showHome = true;
    /* this.headerService.showProfile = true;
    this.headerService.elderlyId = this.meal.elderlyId; */
  }

  replaceStarter() {
    this.elderlyMealService.replaceMealStarter(this.meal.elderlyId, this.meal.id, this.startDate, this.endDate)
      .subscribe(starter => {
        this.meal.starter = starter;
      });
  }

  replaceDish() {
    this.elderlyMealService.replaceMealDish(this.meal.elderlyId, this.meal.id, this.startDate, this.endDate)
      .subscribe(dish => {
        this.meal.dish = dish;
      });
  }

  goToDetails(mealType, id) {
    this.router.navigate(['elderly', this.meal.elderlyId, 'meal', this.meal.id, mealType, id]);
  }
}
