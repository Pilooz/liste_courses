import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Classes
import { StarterClass } from '../../domain/starter.class';
import { DishClass } from '../../domain/dish.class';
import { ElderlyClass } from '../../domain/elderly.class';

// Services
import { HeaderService } from '../../services/header.services';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipe: StarterClass | DishClass;
  public elderly: ElderlyClass;
  public showIngredients: boolean = true;
  public showRecipe: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    this.recipe = this.route.snapshot.data['recipe'];
    this.elderly = this.route.snapshot.data['elderly'];
  }

  ngOnInit() {
    this.headerService.doReturn = () => {
      return this.router.navigate(['/elderly', this.elderly.id]);
    };
    this.headerService.showHome = true;
  }

  toggleDisplay() {
    this.showRecipe = !(this.showIngredients = !this.showIngredients);
  }

  goHome() {
    this.headerService.doReturn();
  }
}
