import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';
import * as moment from 'moment'

import { UrlSettings } from '../config/url.settings';
import { MealClass } from '../domain/meal.class';


@Injectable()
export class ElderlyMealService {

  constructor(private restangular: Restangular) {
  }

  /**
   * Get elderly meals
   * @param elderlyId 
   * @param startDate 
   * @param endDate 
   */
  getElderlyMeals(elderlyId: number, startDate, endDate): Observable<MealClass[]> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).all(UrlSettings.elderlyMeals).getList({
      filter: {
        where: {
          and: [{
            date: { gte: startDate }
          }, {
            date: { lte: endDate }
          }]
        }
      }
    }).pipe(map((res: Array<any>) => res.map(item => new MealClass(item))));
  }

  /**
   * Add elderly meal
   * @param meal 
   */
  addElderlyMeal(meal: MealClass): Observable<MealClass> {
    return this.restangular.one(UrlSettings.elderlyModel, meal.elderlyId).all(UrlSettings.elderlyMeals).post(meal)
      .pipe(map(res => new MealClass(res)));;
  }

  /**
   * delete elderly meal
   * @param elderlyId 
   * @param mealId 
   */
  deleteElderlyMeal(elderlyId: number, mealId: number): Observable<any> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).one(UrlSettings.elderlyMeals, mealId).remove();
  }

  /**
   * Init meals for a given elderly, from now to the given endDate
   * 
   * @param elderlyId 
   * @param endDate 
   */
  initMeals(elderlyId: number, startDate: Date, endDate: Date): Observable<void> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).all(UrlSettings.elderlyMeals)
      .customPOST({ startDate: startDate, endDate: endDate }, UrlSettings.elderlyMealsInit);
  }

  /**
   * Get all meals, with filters
   * 
   * @param elderlyId 
   * @param filter 
   */
  getAll(elderlyId: number, filter: any): Observable<MealClass[]> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).all(UrlSettings.elderlyMeals)
      .getList({ filter: filter })
      .pipe(map((res: Array<any>) => res.map(item => new MealClass(item))));
  }
}
