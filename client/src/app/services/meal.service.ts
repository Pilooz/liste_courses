import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

import { UrlSettings } from '../config/url.settings';
import { MealClass } from '../domain/meal.class';


@Injectable()
export class MealService {

  constructor(private restangular: Restangular) {
  }

  /**
   * Get dish with ingredients and quantity
   * @param mealId 
   */
  getById(mealId): Observable<MealClass> {
    return this.restangular.one(UrlSettings.mealModel, mealId).get({
      filter: {
        include: ['starter', 'dish'],
      }
    }).pipe(map(res => new MealClass(res)));
  }
}
