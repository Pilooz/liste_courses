import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

import { UrlSettings } from '../config/url.settings';
import { ShoppingListClass } from '../domain/shoppingList.class';


@Injectable()
export class ElderlyShoppingListService {

  constructor(private restangular: Restangular) {
  }

  /**
   * Init elderly shopping list
   * @param elderlyId 
   * @param startDate 
   * @param endDate 
   */
  initElderlyShoppingList(elderlyId: number, startDate, endDate): Observable<ShoppingListClass[]> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).all(UrlSettings.elderlyShoppingLists)
      .customPOST({ startDate: startDate, endDate: endDate }, UrlSettings.elderlyShoppingListInit);
  }

  /**
   * Get elderly shopping list
   * @param elderlyId 
   * @param date 
   */
  getElderlyShoppingList(elderlyId: number, date): Observable<ShoppingListClass> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).one(UrlSettings.elderlyShoppingLists, date)
      .get().pipe(map(res => new ShoppingListClass(res)));
  }
}
