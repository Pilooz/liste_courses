import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

import { UrlSettings } from '../config/url.settings';
import { MealClass } from '../domain/meal.class';


@Injectable()
export class ElderlyMealService {

  constructor(private restangular: Restangular) {
  }

  /**
   * Get elderly meals
   * @param elderlyId 
   */
  getElderlyMeal(elderlyId: number): Observable<MealClass[]> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).all(UrlSettings.mealModel).getList()
    .pipe(map((res: Array<any>) => res.map(item => new MealClass(item))));
  }

  /**
   * Add elderly meal
   * @param meal 
   */
  addElderlyMeal(meal: MealClass): Observable<MealClass> {
    return this.restangular.one(UrlSettings.elderlyModel, meal.elderlyId).all(UrlSettings.mealModel).post(meal)
    .pipe(map(res => new MealClass(res)));;
  }

  /**
   * delete elderly meal
   * @param elderlyId 
   * @param mealId 
   */
  deleteElderlyMeal(elderlyId: number, mealId: number): Observable<any> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).one(UrlSettings.mealModel, mealId).remove();
  }
}
