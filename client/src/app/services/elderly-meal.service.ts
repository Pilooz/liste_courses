import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

import { UrlSettings } from '../config/url.settings';
import { MealClass } from '../domain/meal.class';
import { StarterClass } from '../domain/starter.class';
import { DishClass } from '../domain/dish.class';


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
   * Get elderly meals
   * @param elderlyId 
   * @param date 
   */
  getElderlyMeal(elderlyId: number, date): Observable<MealClass[]> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).all(UrlSettings.elderlyMeals).getList({
      filter: {
        where: {
          date: date
        },
        include: ['starter', 'dish'],
        order: 'type',
      }
    }).pipe(map((res: Array<any>) => res.map(item => new MealClass(item))));
  }

  /**
   * Add elderly meal
   * @param meal 
   */
  addElderlyMeal(meal: MealClass): Observable<MealClass> {
    return this.restangular.one(UrlSettings.elderlyModel, meal.elderlyId).all(UrlSettings.elderlyMeals).post(meal)
      .pipe(map(res => new MealClass(res)));
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
      .customPOST({ startDate, endDate }, UrlSettings.elderlyMealsInit);
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

  /**
   * Replace starter of a given meal
   * 
   * @param elderlyId 
   * @param mealId 
   * @param startDate 
   * @param endDate 
   */
  replaceMealStarter(elderlyId: number, mealId: number, startDate, endDate): Observable<StarterClass> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).one(UrlSettings.elderlyMeals, mealId)
      .customPOST({ startDate: startDate, endDate: endDate }, UrlSettings.elderlyReplaceStarter)
      .pipe(map(res => new StarterClass(res)));
  }

  /**
   * Replace dish of a given meal
   * 
   * @param elderlyId 
   * @param mealId 
   * @param startDate 
   * @param endDate 
   */
  replaceMealDish(elderlyId: number, mealId: number, startDate, endDate): Observable<DishClass> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).one(UrlSettings.elderlyMeals, mealId)
      .customPOST({ startDate: startDate, endDate: endDate }, UrlSettings.elderlyReplaceDish)
      .pipe(map(res => new DishClass(res)));
  }
}
