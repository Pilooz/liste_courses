import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Classes
import { StarterClass } from '../../domain/starter.class';
import { DishClass } from '../../domain/dish.class';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipe: StarterClass|DishClass;
  public showIngredients: boolean = true;
  public showRecipe: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.recipe = this.route.snapshot.data['recipe'];
  }

  ngOnInit() {
  }

}
