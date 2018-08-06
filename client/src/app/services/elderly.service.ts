import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

import { UrlSettings } from '../config/url.settings';
import { ElderlyClass } from '../domain/elderly.class';

@Injectable()
export class ElderlyService {

    constructor(private restangular: Restangular) {
    }

    /**
     * Create an elderly
     *
     * @param elderly
     */
    create(elderly: ElderlyClass): Observable<ElderlyClass> {
        return this.restangular.all(UrlSettings.elderlyModel).post(elderly).pipe(map(res => new ElderlyClass(res)));
    }

    /**
     * Update an elderly
     *
     * @param elderly
     */
    update(elderly: ElderlyClass): Observable<ElderlyClass> {
        return this.restangular.one(UrlSettings.elderlyModel, elderly.id).patch(elderly).pipe(map(res => new ElderlyClass(res)));
    }

    /**
     * Retrieve elderly by Id
     *
     * @param elderlyId
     */
    getById(elderlyId: number): Observable<ElderlyClass> {
        return this.restangular.one(UrlSettings.elderlyModel, elderlyId).get().pipe(map(res => new ElderlyClass(res)));
    }
}
