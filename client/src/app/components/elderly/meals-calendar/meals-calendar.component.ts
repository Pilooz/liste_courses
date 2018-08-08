import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as moment from 'moment'
import * as _ from 'lodash'

// Classes
import { ElderlyClass } from '../../../domain/elderly.class';
import { MealClass } from '../../../domain/meal.class';

// Utils
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
  public today: Date = new Date(moment().format("DD/MM/YYYY"));
  public endDate: Date = moment(new Date(moment().format("DD/MM/YYYY"))).add(7, 'days').toDate();
  // Build next week dates
  public dates: Date[] = [this.today];

  constructor(
    protected route: ActivatedRoute,
    private elderlyMealService: ElderlyMealService) {
    this.elderly = this.route.snapshot.data['elderly']
  }

  ngOnInit() {
    this.loadMeals();
  }

  // Load meals of the elderly
  loadMeals() {
    this.elderlyMealService.getElderlyFutureMeals(this.elderly.id).subscribe(meals => {
      this.meals = meals;
      this.initDates();
    })
  }

  getLunch(date: Date): MealClass {
    const lunches: MealClass[] = _.filter(this.meals, { date: date, type: MealType.LUNCH }) as MealClass[];
    return lunches.length ? lunches[0] : null;
  }

  getDinner(date): MealClass {
    const dinners: MealClass[] = _.filter(this.meals, { date: date, type: MealType.DINNER }) as MealClass[];
    return dinners.length ? dinners[0] : undefined;
  }

  toggleLunch(date) {
    const lunch = this.getLunch(date);
    lunch ? this.deleteMeal(lunch) : this.addMeal(new MealClass ({
      date: date,
      elderlyId: this.elderly.id,
      type: MealType.LUNCH
    }));
  }

  toggleDinner(date) {
    const dinner = this.getDinner(date);
    dinner ? this.deleteMeal(dinner) : this.addMeal(new MealClass ({
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
    console.log(event.target.value);
  }

  initDates() {
    var date = this.today;

    while ((date = moment(date).add(1, 'days').toDate()) < this.endDate) {
      this.dates.push(date);
    }
  }
}
