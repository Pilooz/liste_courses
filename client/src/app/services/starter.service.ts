import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

import { UrlSettings } from '../config/url.settings';
import { StarterClass } from '../domain/starter.class';


@Injectable()
export class StarterService {

  constructor(private restangular: Restangular) {
  }

  /**
   * Get starter with ingredients and quantity
   * @param starterId 
   */
  getStarterWithIngredients(starterId): Observable<StarterClass> {
    return this.restangular.one(UrlSettings.starterModel, starterId).get().pipe(map(res => new StarterClass(res)));
  }
}
