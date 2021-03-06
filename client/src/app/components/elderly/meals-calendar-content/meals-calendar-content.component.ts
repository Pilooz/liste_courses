// Utils
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment';
import { AbstractElderlyModifier } from '../../abstract/abstract-elderly-modifier';

// Classes
import { MealClass } from '../../../domain/meal.class';

// Services
import { ElderlyService } from '../../../services/elderly.service';
import { HeaderService } from '../../../services/header.services';
import { ElderlyShoppingListService } from '../../../services/elderly-shoppingList.service';
import { ElderlyMealService } from '../../../services/elderly-meal.service';

@Component({
  selector: 'app-meals-calendar-content',
  templateUrl: './meals-calendar-content.component.html',
  styleUrls: ['./meals-calendar-content.component.css']
})
export class MealsCalendarContentComponent extends AbstractElderlyModifier implements OnInit {

  public meals: MealClass[] = [];
  public startDate: Date;
  public endDate: Date;
  public dates: Date[] = [];
  public today: Date = new Date(moment().format("MM/DD/YYYY"));
  public meal: MealClass;

  constructor(
    @Inject(ElderlyService) elderlyService: ElderlyService,
    @Inject(ActivatedRoute) route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
    private elderlyShoppingListService: ElderlyShoppingListService,
    private elderlyMealService: ElderlyMealService) {
    super(elderlyService, route);
    this.meals = this.route.snapshot.data['meals'];

    // Initialize dates
    if (!this.route.snapshot.queryParamMap.get('startDate') || !this.route.snapshot.queryParamMap.get('endDate')) {
      this.startDate = this.getMondayOfWeek(this.today);
      this.endDate = this.getSundayOfWeek(this.today);
    } else {
      this.startDate = new Date(parseInt(this.route.snapshot.queryParamMap.get('startDate')));
      this.endDate = new Date(parseInt(this.route.snapshot.queryParamMap.get('endDate')));
    }

    this.elderlyMealService.getElderlyFarestMeal(this.elderly.id, this.startDate).subscribe(meal => {
      if (meal) {
        this.endDate = meal.date.getTime() > this.endDate.getTime() ? meal.date : this.endDate;
      }
      this.initDates();
    });
  }

  ngOnInit() {
    this.initDoReturn();
    this.headerService.showHome = true;
    this.headerService.showProfile = true;
    this.headerService.elderlyId = this.elderly.id;
  }

  initDates() {
    var date = this.startDate;
    this.dates.length = 0;
    this.dates.push(date);

    while ((date = moment(date).add(1, 'days').toDate()) <= this.endDate) {
      this.dates.push(date);
    }
  }

  public getLunch(date: Date) {
    return _.find(this.meals, (meal) => meal.date.getTime() === date.getTime() && meal.isLunch());
  }

  public getDinner(date: Date) {
    return _.find(this.meals, (meal) => meal.date.getTime() === date.getTime() && meal.isDinner());
  }

  public goToShoppingList() {
    this.elderlyShoppingListService.initElderlyShoppingList(this.elderly.id, this.startDate, this.endDate).subscribe(() => {
      this.router.navigate(['/elderly', this.elderly.id, 'shopping-list']);
    })
  }

  getMondayOfWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? -6 : 1) - day);
  }

  getSundayOfWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? 0 : 7) - day);
  }

  viewMeal(meal) {
    this.meal = meal;
  }

  closeMeal(neawMeal) {
    var oldMeal = _.find(this.meals, this.meal);
    this.meal = undefined;
    Object.assign(oldMeal, neawMeal);
    this.initDoReturn();
  }

  initDoReturn() {
    this.headerService.doReturn = () => {
      if (this.standalone) {
        return this.router.navigate(['/elderly', this.elderly.id], { queryParams: { showIdentity: true } });
      }
      return this.router.navigate(['/elderly', this.elderly.id, 'meals-calendar']);
    };
  }
}
