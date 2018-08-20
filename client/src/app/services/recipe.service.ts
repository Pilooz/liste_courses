import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

import { UrlSettings } from '../config/url.settings';
import { RecipeClass } from '../domain/recipe.class';
import { IngredientClass } from '../domain/ingredient.class';


@Injectable()
export class RecipeService {

  constructor(private restangular: Restangular) {
  }

  /**
   * Get elderly meals
   * @param recipeId 
   */
  getRecipeWithIngredients(recipeId): Observable<IngredientClass[]> {
    return this.restangular.one(UrlSettings.recipeModel, recipeId).all(UrlSettings.recipeIngredients)
      .getList().pipe(map((res: Array<any>) => res.map(item => new IngredientClass(item))));
  }
}
