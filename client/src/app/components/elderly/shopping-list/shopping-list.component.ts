import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

// Classes
import { ElderlyClass } from '../../../domain/elderly.class';

// Services
import { HeaderService } from '../../../services/header.services';
import { ElderlyService } from '../../../services/elderly.service';

// Utils
import { AbstractElderlyModifier } from '../../abstract/abstract-elderly-modifier';
import { ShoppingListClass } from '../../../domain/shoppingList.class';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent extends AbstractElderlyModifier implements OnInit {

  public elderly: ElderlyClass;
  public shoppingList: ShoppingListClass = this.route.snapshot.data['shoppingList'];

  constructor(
    @Inject(ElderlyService) elderlyService: ElderlyService,
    @Inject(ActivatedRoute) route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    super(elderlyService, route);
    this.elderly = this.route.snapshot.data['elderly']
  }

  ngOnInit() {
    this.headerService.doReturn = () => {
    };
    this.headerService.doReturn = () => {
      if (this.standalone) {
        return this.router.navigate(['/elderly', this.elderly.id]);
      }
      return this.router.navigate(['/elderly', this.elderly.id, 'mealsCalendarContent']);
    };
    this.headerService.showHome = true;
  }

}
