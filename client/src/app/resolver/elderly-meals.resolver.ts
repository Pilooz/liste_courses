import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { MealClass } from '../domain/meal.class';
import { ElderlyMealService } from '../services/elderly-meal.service';

/**
 * Get the elderly, identified by his ID.
 */
@Injectable()
export class ElderlyMealsResolver implements Resolve<MealClass[]> {

    constructor(private elderlyMealService: ElderlyMealService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const elderlyId = +route.paramMap.get('elderlyId');
        const startDate = new Date(+route.queryParamMap.get('startDate'));
        const endDate = new Date(+route.queryParamMap.get('endDate'));
        return this.elderlyMealService.getAll(elderlyId, {
            where: {
                and: [{ date: { gte: startDate } }, { date: { lte: endDate } }],
            },
            include: ['starter', 'dish']
        });
    }

}