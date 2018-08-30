import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  public meal: MealClass;
  public startDate: Date;
  public endDate: Date;
  public edit: boolean = false;
  public standalone: boolean = false;
  @Output() public closeMeal: EventEmitter<MealClass> = new EventEmitter<MealClass>();

  constructor(
    private headerService: HeaderService,
    private elderlyMealService: ElderlyMealService,
    private router: Router,
    private route: ActivatedRoute) {
    this.meal = this.route.snapshot.data['meal'];
    this.startDate = new Date(+this.route.snapshot.queryParamMap.get('startDate'));
    this.endDate = new Date(+this.route.snapshot.queryParamMap.get('endDate'));
    this.edit = this.route.snapshot.queryParamMap.get('edit') === 'true';
    this.standalone = this.route.snapshot.queryParamMap.get('standalone') === 'true';
  }

  ngOnInit() {
    this.headerService.doReturn = () => {
      if (this.edit) {
        this.router.navigate(['/elderly', this.meal.elderlyId, 'mealsCalendarContent'], { queryParams: { standalone: this.standalone, startDate: this.startDate.getTime(), endDate: this.endDate.getTime() } });
      } else {
        this.router.navigate(['/elderly', this.meal.elderlyId]);
      }
    };

    this.headerService.showHome = true;
    this.headerService.showProfile = true;
    this.headerService.elderlyId = this.meal.elderlyId;
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

  goToCalendar() {
    this.headerService.doReturn();
  }
}
