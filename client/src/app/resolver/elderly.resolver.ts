import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ElderlyClass } from '../domain/elderly.class';
import { ElderlyService } from '../services/elderly.service';

/**
 * Get the elderly, identified by his ID.
 */
@Injectable()
export class ElderlyResolver implements Resolve<ElderlyClass> {

    constructor(private elderlyService: ElderlyService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const elderlyId = +route.paramMap.get('elderlyId');
        return this.elderlyService.getById(elderlyId);
    }

}