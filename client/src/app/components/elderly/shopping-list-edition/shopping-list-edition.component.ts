import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AbstractElderlyModifier } from '../../abstract/abstract-elderly-modifier';
import * as moment from 'moment';

// Classes
import { ShoppingListClass } from '../../../domain/shoppingList.class';

// Services
import { HeaderService } from '../../../services/header.services';
import { ElderlyService } from '../../../services/elderly.service';
import { ElderlyShoppingListService } from '../../../services/elderly-shoppingList.service';
import { ElderlyMealService } from '../../../services/elderly-meal.service';
import { MealClass } from '../../../domain/meal.class';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-shopping-list-edition',
  templateUrl: './shopping-list-edition.component.html',
  styleUrls: ['./shopping-list-edition.component.css']
})
export class ShoppingListEditionComponent extends AbstractElderlyModifier implements OnInit {

  public printingMenu: boolean = false;
  public printingShoppingList: boolean = false;
  // Get today's date without time
  public today: Date = new Date(moment().format("MM/DD/YYYY"));
  public shoppingList: ShoppingListClass;
  public meals: MealClass[];

  constructor(
    @Inject(ElderlyService) elderlyService: ElderlyService,
    @Inject(ActivatedRoute) route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
    private elderlyShoppingListService: ElderlyShoppingListService,
    private elderlyMealService: ElderlyMealService,
    private notificationsService: NotificationsService) {
    super(elderlyService, route);
  }

  ngOnInit() {
    this.headerService.doReturn = () => {
      return this.router.navigate(['elderly', this.elderly.id, 'shopping-list']);
    };
    this.headerService.showHome = true;
    this.headerService.showProfile = true;
    this.headerService.elderlyId = this.elderly.id;
  }

  goHome() {
    return this.router.navigate(['elderly', this.elderly.id]);
  }

  sendMail() {
    const today: Date = new Date(moment().format("MM/DD/YYYY"));
    this.elderlyService.sendShoppingListMail(this.elderly.id, today).subscribe(
      () => this.notificationsService.success('Email', 'L\'email a bien été envoyé'),
      () => this.notificationsService.success('Email', 'Erreur lors de l\'envoi de l\'email')
    );
  }

  printMenu() {
    this.elderlyMealService.getAll(this.elderly.id, {
      where: {
        date: { gte: this.getMondayOfWeek(this.today) }
      },
      include: ['starter', 'dish'],
      order: 'date, type'
    }).subscribe(meals => {
      this.meals = meals;
      document.getElementById('header').style.display = 'none';
      this.printingMenu = true;
      setTimeout(function () {
        window.print();
      }, 500);
    });

    /* TODO: get raspberry endpoint url
    this.elderlyMealService.printMeals(this.elderly.id, this.today).subscribe(res => {
      console.log(res);
    }); */
  }

  printShoppingList() {
    this.elderlyShoppingListService.getElderlyShoppingList(this.elderly.id, this.today).subscribe(shoppingList => {
      this.shoppingList = shoppingList;
      document.getElementById('header').style.display = 'none';
      this.printingShoppingList = true;
      setTimeout(function () {
        window.print();
      }, 500);

      /* TODO: get raspberry endpoint url
      this.elderlyShoppingListService.printShoppingList(this.elderly.id, this.shoppingList.id).subscribe(res => {
        console.log(res);
      }); */
    });
  }

  tooglePrintingMenu() {
    this.printingMenu = !this.printingMenu;
    document.getElementById('header').style.display = 'block';
  }

  tooglePrintingShoppingList() {
    this.printingShoppingList = !this.printingShoppingList;
    document.getElementById('header').style.display = 'block';
  }

  getMondayOfWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? -6 : 1) - day);
  }
}
