import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { MealClass } from '../domain/meal.class';
import { ElderlyMealService } from '../services/elderly-meal.service';
import * as moment from 'moment';

/**
 * Get the elderly, identified by his ID.
 */
@Injectable()
export class ElderlyMealsResolver implements Resolve<MealClass[]> {

    constructor(private elderlyMealService: ElderlyMealService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const elderlyId = +route.paramMap.get('elderlyId');
        var startDate;
        var endDate;

        if (!route.queryParamMap.get('startDate') || !route.queryParamMap.get('endDate')) {
            const today: Date = new Date(moment().format("MM/DD/YYYY"));
            startDate = this.getMondayOfWeek(today);
            endDate = this.getSundayOfWeek(today);
        } else {
            startDate = new Date(+route.queryParamMap.get('startDate'));
            endDate = new Date(+route.queryParamMap.get('endDate'));
        }

        return this.elderlyMealService.getElderlyFarestMeal(elderlyId, startDate).pipe(mergeMap(meal => {
            if (meal) {
                endDate = meal.date.getTime() > endDate.getTime() ? meal.date : endDate;
            }
            return this.elderlyMealService.getAll(elderlyId, {
                where: {
                    and: [{ date: { gte: startDate } }, { date: { lte: endDate } }],
                },
                include: ['starter', 'dish']
            });
        }));
    }

    getMondayOfWeek(d) {
        var day = d.getDay();
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? -6 : 1) - day);
    }

    getSundayOfWeek(d) {
        var day = d.getDay();
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? 0 : 7) - day);
    }
}