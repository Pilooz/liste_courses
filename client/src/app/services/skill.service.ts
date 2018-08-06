import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

import { UrlSettings } from '../config/url.settings';

import { SkillClass } from '../domain/skill.class';

@Injectable()
export class SkillService {

  constructor(private restangular: Restangular) {
  }

  /**
   * Get all skills
   */
  getAll(): Observable<SkillClass[]> {
    return this.restangular.all(UrlSettings.skillModel).getList({filter: {order : 'label'}})
      .pipe(map((res: Array<any>) => res.map(skill => new SkillClass(skill))));
  }
}
