import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from '@angular/material';
import * as _ from 'lodash'
import { AbstractElderlyModifier } from '../../abstract/abstract-elderly-modifier';

// Classes
import { ElderlyClass } from '../../../domain/elderly.class';
import { IngredientClass } from '../../../domain/ingredient.class';
import { ShoppingListClass } from '../../../domain/shoppingList.class';

// Components
import { DialogComponent } from '../../dialog/dialog.component';
import { IngredientQuantityDialogComponent } from '../../dialog/ingredient-quantity-dialog/ingredient-quantity-dialog.component';

// Services
import { HeaderService } from '../../../services/header.services';
import { ElderlyService } from '../../../services/elderly.service';
import { ElderlyShoppingListService } from '../../../services/elderly-shoppingList.service';

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
    private headerService: HeaderService,
    private elderlyShoppingListService: ElderlyShoppingListService,
    private dialog: MatDialog) {
    super(elderlyService, route);
  }

  ngOnInit() {
    this.headerService.doReturn = () => {
      if (this.standalone) {
        return this.router.navigate(['/elderly', this.elderly.id]);
      }
      return this.router.navigate(['/elderly', this.elderly.id, 'mealsCalendarContent']);
    };
    this.headerService.showHome = true;
    this.headerService.showProfile = true;
    this.headerService.elderlyId = this.elderly.id;
  }

  editQuantity(ingredient: IngredientClass) {
    this.dialog.open(IngredientQuantityDialogComponent, {
      width: '350px',
      panelClass: 'dialog',
      data: {
        ingredient: ingredient
      }
    }).afterClosed().subscribe((res) => {
      if (!res) {
        return;
      }
      this.elderlyShoppingListService.editShoppingListIngredient(
        this.shoppingList.elderlyId,
        this.shoppingList.id,
        ingredient.id,
        res
      ).subscribe(() => {
        ingredient.quantity = res;
      });
    });
  }

  removeIngredient(ingredient: IngredientClass) {
    this.dialog.open(DialogComponent, {
      width: '350px',
      panelClass: 'dialog',
      data: {
        title: 'Suppression',
        body: `Voulez-vous vraiment supprimer l'ingrédient ${ingredient.name} ?`
      }
    }).afterClosed().subscribe((res) => {
      if (!res) {
        return;
      }
      this.elderlyShoppingListService.removeShoppingListIngredient(
        this.shoppingList.elderlyId,
        this.shoppingList.id,
        ingredient.id
      ).subscribe(() => {
        _.remove(this.shoppingList.ingredients, ingredient);
      });
    });
  }

  saveShoppingList() {
    this.elderlyShoppingListService.editShoppingList(new ShoppingListClass({
      id: this.shoppingList.id,
      elderlyId: this.shoppingList.elderlyId,
      note: this.shoppingList.note
    })).subscribe(() => {
      this.router.navigate(['elderly', this.elderly.id, 'shopping-list', 'edition']);
    })
  }
}
