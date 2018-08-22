import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

import { UrlSettings } from '../config/url.settings';
import { DishClass } from '../domain/dish.class';


@Injectable()
export class DishService {

  constructor(private restangular: Restangular) {
  }

  /**
   * Get dish with ingredients and quantity
   * @param dishId 
   */
  getDishWithIngredients(dishId): Observable<DishClass> {
    return this.restangular.one(UrlSettings.dishModel, dishId).get().pipe(map(res => new DishClass(res)));
  }
}
