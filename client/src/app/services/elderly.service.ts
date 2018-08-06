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
     * Retrieve user by Id
     *
     * @param userId
     */
    create(elderly: ElderlyClass): Observable<ElderlyClass> {
        return this.restangular.all(UrlSettings.elderlyModel).post(elderly).pipe(map(res => new ElderlyClass(res)));
    }
}
