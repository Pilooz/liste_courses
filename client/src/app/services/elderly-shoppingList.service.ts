import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

import { UrlSettings } from '../config/url.settings';
import { ShoppingListClass } from '../domain/shoppingList.class';
import { IngredientClass } from '../domain/ingredient.class';


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
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).all(UrlSettings.elderlyShoppingLists)
    .one(UrlSettings.elderlyShoppingListsDate, date).get().pipe(map(res => new ShoppingListClass(res)));
  }

  /**
   * Remove ingredient from shopping list
   * @param elderlyId 
   * @param shoppingListId 
   * @param ingredientId 
   */
  removeShoppingListIngredient(elderlyId: number, shoppingListId: number, ingredientId: number): Observable<IngredientClass> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).one(UrlSettings.elderlyShoppingLists, shoppingListId)
    .one(UrlSettings.elderlyShoppingListIngredient, ingredientId).remove().pipe(map(res => new IngredientClass(res)));
  }

  /**
   * Edit shopping list ingredient quantity
   * @param elderlyId 
   * @param shoppingListId 
   * @param ingredientId 
   * @param quantity 
   */
  editShoppingListIngredient(elderlyId: number, shoppingListId: number, ingredientId: number, quantity: number): Observable<IngredientClass> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).one(UrlSettings.elderlyShoppingLists, shoppingListId)
    .one(UrlSettings.elderlyShoppingListIngredient, ingredientId).patch({quantity: quantity})
    .pipe(map(res => new IngredientClass(res)));
  }

  /**
   * Edit shopping list
   * @param shoppingList 
   */
  editShoppingList(shoppingList: ShoppingListClass): Observable<IngredientClass> {
    return this.restangular.one(UrlSettings.elderlyModel, shoppingList.elderlyId).one(UrlSettings.elderlyShoppingLists, shoppingList.id)
    .customPUT(shoppingList).pipe(map(res => new IngredientClass(res)));
  }
}
