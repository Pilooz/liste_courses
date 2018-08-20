import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import * as moment from 'moment';
import { ElderlyShoppingListService } from '../services/elderly-shoppingList.service';
import { ShoppingListClass } from '../domain/shoppingList.class';

/**
 * Get the elderly, identified by his ID.
 */
@Injectable()
export class ElderlyShoppingListResolver implements Resolve<ShoppingListClass> {

    constructor(private elderlyShoppingListService: ElderlyShoppingListService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const today: Date = new Date(moment().format("MM/DD/YYYY"));
        const elderlyId = +route.paramMap.get('elderlyId');
        return this.elderlyShoppingListService.getElderlyShoppingList(elderlyId, today);
    }

}