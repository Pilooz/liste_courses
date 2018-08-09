import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment';
import { MealClass } from '../../../domain/meal.class';
import { ElderlyService } from '../../../services/elderly.service';
import { HeaderService } from '../../../services/header.services';
import { AbstractElderlyModifier } from '../../abstract/abstract-elderly-modifier';

@Component({
  selector: 'app-meals-calendar-content',
  templateUrl: './meals-calendar-content.component.html',
  styleUrls: ['./meals-calendar-content.component.css']
})
export class MealsCalendarContentComponent extends AbstractElderlyModifier implements OnInit {

  public meals: MealClass[] = [];
  public startDate: Date;
  public endDate: Date;
  public dates: Date[] = [];

  constructor(
    @Inject(ElderlyService) elderlyService: ElderlyService,
    @Inject(ActivatedRoute) route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    super(elderlyService, route);
    this.meals = this.route.snapshot.data['meals'];
    this.startDate = new Date(parseInt(this.route.snapshot.queryParamMap.get('startDate')));
    this.endDate = new Date(parseInt(this.route.snapshot.queryParamMap.get('endDate')));
  }

  ngOnInit() {
    this.headerService.doReturn = () => {
      if (this.standalone) {
        return this.router.navigate(['/elderly', this.elderly.id], { queryParams: { showIdentity: true } });
      }
      return this.router.navigate(['/elderly', this.elderly.id, 'meals-calendar']);
    };
    this.headerService.showHome = true;
    this.initDates();
  }

  initDates() {
    var date = this.startDate;
    this.dates.length = 0;
    this.dates.push(date);

    while ((date = moment(date).add(1, 'days').toDate()) <= this.endDate) {
      this.dates.push(date);
    }
  }

  public getLunch(date: Date) {
    return _.find(this.meals, (meal) => meal.date.getTime() === date.getTime() && meal.isLunch());
  }

  public getDinner(date: Date) {
    return _.find(this.meals, (meal) => meal.date.getTime() === date.getTime() && meal.isDinner());
  }

}
