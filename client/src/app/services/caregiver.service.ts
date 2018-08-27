import { Injectable } from '@angular/core';
import { CaregiverClass } from '../domain/caregiver';
import { Restangular } from '../../../node_modules/ngx-restangular';
import { UrlSettings } from '../config/url.settings';
import { Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaregiverService {

  constructor(private restangular: Restangular) { }

  /**
   * Creates a caregiver
   * 
   * @param elderlyId 
   * @param caregiver 
   */
  create(elderlyId, caregiver: CaregiverClass): Observable<CaregiverClass> {
    return this.restangular
      .one(UrlSettings.elderlyModel, elderlyId)
      .all(UrlSettings.elderlyCaregivers)
      .post(caregiver)
      .pipe(map(res => new CaregiverClass(res)));
  }

  /**
   * Updates a caregiver
   * 
   * @param caregiver 
   */
  update(caregiver: CaregiverClass): Observable<CaregiverClass> {
    return this.restangular.one(UrlSettings.caregiverModel, caregiver.id)
    .patch(caregiver)
    .pipe(map(res => new CaregiverClass(res)));
  }

  /**
   * Get a caregiver with elderly ID
   * 
   * @param id 
   */
  getByElderlyId(id: number): Observable<CaregiverClass> {
    return this.restangular.one(UrlSettings.elderlyModel, id)
    .customGET(UrlSettings.elderlyCaregivers)
    .pipe(map(res => new CaregiverClass(res)));
  }
}
