import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment'
import * as _ from 'lodash'

// Classes
import { ElderlyClass } from '../../../domain/elderly.class';
import { MealClass } from '../../../domain/meal.class';

// Services
import { ElderlyMealService } from '../../../services/elderly-meal.service';
import { HeaderService } from '../../../services/header.services';

@Component({
  selector: 'app-elderly-profile',
  templateUrl: './elderly-profile.component.html',
  styleUrls: ['./elderly-profile.component.css']
})
export class ElderlyProfileComponent implements OnInit {

  public elderly: ElderlyClass;
  public showIdentity: boolean;
  public showFood: boolean;
  public showSkills: boolean;
  public showMeal: number;
  // Get today's date without time
  public today: Date = new Date(moment().format("MM/DD/YYYY"));
  public startDate: Date = this.getMondayOfWeek(this.today);
  public endDate: Date = this.getSundayOfWeek(this.today);
  public todaysMeals: MealClass[];
  public meal: MealClass;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
    private elderlyMealService: ElderlyMealService) {
    this.elderly = this.route.snapshot.data['elderly'];
    this.showIdentity = this.route.snapshot.queryParamMap.get('showIdentity') === 'true';
    this.showFood = this.route.snapshot.queryParamMap.get('showFood') === 'true';
    this.showSkills = this.route.snapshot.queryParamMap.get('showSkills') === 'true';
    this.showMeal = +this.route.snapshot.queryParamMap.get('showMeal');

    this.elderlyMealService.getElderlyFarestMeal(this.elderly.id, this.startDate).subscribe(meal => {
      if (meal) {
        this.endDate = meal.date.getTime() > this.endDate.getTime() ? meal.date : this.endDate;
      }
    });
  }

  ngOnInit() {
    this.initDoReturn();
    this.headerService.showHome = true
    this.headerService.showProfile = false;
    this.getTodaysMeal();
  }

  getMondayOfWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? -6 : 1) - day);
  }

  getSundayOfWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? 0 : 7) - day);
  }

  getTodaysMeal() {
    this.elderlyMealService.getElderlyMeal(this.elderly.id, this.today).subscribe(meal => {
      this.todaysMeals = meal;
        this.meal = this.showMeal ? _.find(this.todaysMeals, {id: this.showMeal}) : undefined;
    });
  }

  initDoReturn() {
    this.headerService.doReturn = () => this.router.navigate(['/home']);
  }

  closeMeal() {
    this.showMeal = undefined;
    this.meal = undefined;
    this.initDoReturn();
  }

  displayMeal(meal: MealClass) {
    this.meal = meal;
  }
}
