import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { UrlSettings } from '../config/url.settings';


@Injectable()
export class ElderlySkillService {

  constructor(private restangular: Restangular) {
  }

  /**
   * Put elderly skill
   * @param elderlyId 
   * @param skillId 
   */
  putElderlySkill(elderlyId: number, skillId: number): Observable<any> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).all(UrlSettings.skillModel)
    .one(UrlSettings.suffixRelation, skillId).put();
  }

  /**
   * delete elderly skill
   * @param elderlyId 
   * @param skillId 
   */
  deleteElderlySkill(elderlyId: number, skillId: number): Observable<any> {
    return this.restangular.one(UrlSettings.elderlyModel, elderlyId).all(UrlSettings.skillModel)
    .one(UrlSettings.suffixRelation, skillId).remove();
  }
}
