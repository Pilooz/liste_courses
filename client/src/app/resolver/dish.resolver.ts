import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DishClass } from '../domain/dish.class';
import { DishService } from '../services/dish.service';

/**
 * Get the elderly, identified by his ID.
 */
@Injectable()
export class DishResolver implements Resolve<DishClass> {

    constructor(private dishService: DishService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const dishId = +route.paramMap.get('dishId');
        return this.dishService.getDishWithIngredients(dishId);
    }

}