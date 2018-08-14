import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from 'moment'
import * as _ from 'lodash'

// Classes
import { ElderlyClass } from '../../../domain/elderly.class';
import { MealClass } from '../../../domain/meal.class';

// Utils
import { HeaderService } from '../../../services/header.services';
import { ElderlyMealService } from '../../../services/elderly-meal.service';
import { MealType } from '../../../enum/meal-type.enum';

@Component({
  selector: 'app-meals-calendar',
  templateUrl: './meals-calendar.component.html',
  styleUrls: ['./meals-calendar.component.css']
})
export class MealsCalendarComponent implements OnInit {

  public elderly: ElderlyClass;
  public meals: MealClass[];
  // Get today's date without time
  public today: Date = new Date(moment().format("MM/DD/YYYY"));
  public startDate: Date = this.getMondayOfWeek(this.today);
  public endDate: Date = this.getSundayOfWeek(this.today);
  public minDate = this.endDate;
  // Build next week dates
  public dates: Date[] = [];

  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
    private elderlyMealService: ElderlyMealService) {
    this.elderly = this.route.snapshot.data['elderly']
  }

  ngOnInit() {
    this.headerService.doReturn = () => {
      return this.router.navigate(['/elderly', this.elderly.id]);
    };
    this.headerService.showHome = true;
    this.loadMeals();
  }

  // Load meals of the elderly
  loadMeals() {
    this.elderlyMealService.getElderlyMeals(this.elderly.id, this.startDate, this.endDate).subscribe(meals => {
      this.meals = meals;
      if (meals && meals.length) {
        const farestMeal = _.maxBy(this.meals, 'date');
        this.minDate = farestMeal.date;
        this.endDate = farestMeal.date.getTime() > this.endDate.getTime() ? farestMeal.date : this.endDate;
      }
      this.initDates();
    })
  }

  getLunch(date: Date): MealClass {
    return _.find(this.meals, (meal) => meal.date.getTime() === date.getTime() && meal.isLunch());
  }

  getDinner(date): MealClass {
    return _.find(this.meals, (meal) => meal.date.getTime() === date.getTime() && meal.isDinner());
  }

  toggleLunch(date) {
    const lunch = this.getLunch(date);
    lunch ? this.deleteMeal(lunch) : this.addMeal(new MealClass({
      date: date,
      elderlyId: this.elderly.id,
      type: MealType.LUNCH
    }));
  }

  toggleDinner(date) {
    const dinner = this.getDinner(date);
    dinner ? this.deleteMeal(dinner) : this.addMeal(new MealClass({
      date: date,
      elderlyId: this.elderly.id,
      type: MealType.DINNER
    }));
  }

  addMeal(meal: MealClass) {
    this.elderlyMealService.addElderlyMeal(meal).subscribe(meal => {
      this.meals.push(meal);
    });
  }

  deleteMeal(meal: MealClass) {
    this.elderlyMealService.deleteElderlyMeal(meal.elderlyId, meal.id).subscribe(() => {
      _.remove(this.meals, { id: meal.id });
    });
  }

  setEndDate(event) {
    this.endDate = event.target.value;
    this.initDates();
  }

  initDates() {
    var date = this.startDate;
    this.dates.length = 0;
    this.dates.push(date);

    while ((date = moment(date).add(1, 'days').toDate()) <= this.endDate) {
      this.dates.push(date);
    }
  }

  public initMeals() {
    this.elderlyMealService.initMeals(this.elderly.id, this.startDate, this.endDate)
      .subscribe(() => this.router.navigate(['/elderly', this.elderly.id, 'mealsCalendarContent'], { queryParams: { startDate: this.startDate.getTime(), endDate: this.endDate.getTime() } }));
  }

  getMondayOfWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? -6 : 1) - day);
  }

  getSundayOfWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? 0 : 7) - day);
  }
}
