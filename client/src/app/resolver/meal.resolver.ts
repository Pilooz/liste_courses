import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { MealClass } from '../domain/meal.class';
import { MealService } from '../services/meal.service';

/**
 * Get an elderly meal
 */
@Injectable()
export class MealResolver implements Resolve<MealClass> {

    constructor(private mealService: MealService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const mealId = +route.paramMap.get('mealId');
        return this.mealService.getById(mealId);
    }

}