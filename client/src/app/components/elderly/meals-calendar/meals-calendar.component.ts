import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'
import { MealClass } from '../../../domain/meal.class';
import { MealType } from '../../../enum/meal-type.enum';

@Component({
  selector: 'app-meals-calendar',
  templateUrl: './meals-calendar.component.html',
  styleUrls: ['./meals-calendar.component.css']
})
export class MealsCalendarComponent implements OnInit {

  public meals: MealClass[] = [
    new MealClass({
      date: new Date("08/06/2018"),
      type: MealType.DINNER
    }),
    new MealClass({
      date: new Date("08/07/2018"),
      type: MealType.LUNCH
    }),
    new MealClass({
      date: new Date("08/07/2018"),
      type: MealType.DINNER
    }),
    new MealClass({
      date: new Date("08/08/2018"),
      type: MealType.LUNCH
    }),
    new MealClass({
      date: new Date("08/08/2018"),
      type: MealType.DINNER
    }),
    new MealClass({
      date: new Date("08/09/2018"),
      type: MealType.LUNCH
    }),
    new MealClass({
      date: new Date("08/09/2018"),
      type: MealType.DINNER
    }),
    new MealClass({
      date: new Date("08/10/2018"),
      type: MealType.LUNCH
    })
  ];
  public mealsList: any;

  constructor() { }

  ngOnInit() {
    this.mealsList = _.sortBy(_.groupBy(this.meals, 'date'), [function(o) { return o.date; }]);
    console.log(this.mealsList);
  }

}
