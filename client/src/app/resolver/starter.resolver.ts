import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { StarterClass } from '../domain/starter.class';
import { StarterService } from '../services/starter.service';

/**
 * Get the elderly, identified by his ID.
 */
@Injectable()
export class StarterResolver implements Resolve<StarterClass> {

    constructor(private starterService: StarterService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const starterId = +route.paramMap.get('starterId');
        return this.starterService.getStarterWithIngredients(starterId);
    }

}