import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'dateDiff' })
export class DateDiffPipe implements PipeTransform {
    transform(from: Date | moment.Moment, to?: Date | moment.Moment, unitOfTime?: moment.unitOfTime.Diff): number {
        if (!to) {
            to = new Date();
        }
        return moment(to).diff(from, unitOfTime);
    }
}