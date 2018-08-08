import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { MealClass } from '../../../domain/meal.class';

@Component({
  selector: 'app-meals-calendar-content',
  templateUrl: './meals-calendar-content.component.html',
  styleUrls: ['./meals-calendar-content.component.css']
})
export class MealsCalendarContentComponent implements OnInit {

  public meals: MealClass[] = [];
  public dates: Date[] = [];

  constructor(private route: ActivatedRoute) {
    this.meals = this.route.snapshot.data['meals'];
    this.dates = _.uniqWith(_.map(this.meals, 'date'), (date1, date2) => date1.getTime() === date2.getTime());
  }

  ngOnInit() {
  }

  public getLunch(date: Date) {
    return _.find(this.meals, (meal) => meal.date === date && meal.isLunch());
  }

  public getDinner(date: Date) {
    return _.find(this.meals, (meal) => meal.date === date && meal.isDinner());
  }

}
