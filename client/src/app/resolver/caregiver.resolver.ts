import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CaregiverService } from '../services/caregiver.service';
import { CaregiverClass } from '../domain/caregiver.class';
import { Observable, EMPTY, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Get the elderly, identified by his ID.
 */
@Injectable()
export class CaregiverResolver implements Resolve<CaregiverClass> {

    constructor(private caregiverService: CaregiverService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const elderlyId = +route.paramMap.get('elderlyId');
        return this.caregiverService.getByElderlyId(elderlyId).pipe(catchError((err, caught) => of(new CaregiverClass())));
    }

}