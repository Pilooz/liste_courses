import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

// Classes
import { ElderlyClass } from '../../../domain/elderly.class';

// Services
import { HeaderService } from '../../../services/header.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public elderly: ElderlyClass;
  public ingredients = [{
    name: 'Tomates',
    unit: 'g',
    quantity: 300
  }, {
    name: 'Echalotes',
    unit: 'g',
    quantity: 100
  }, {
    name: 'Carottes',
    unit: 'g',
    quantity: 400
  }, {
    name: 'Concombres',
    unit: null,
    quantity: 1
  }, {
    name: 'Oeufs',
    unit: null,
    quantity: 6
  }, {
    name: 'Beurre',
    unit: 'g',
    quantity: '250'
  }]

  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    this.elderly = this.route.snapshot.data['elderly']
  }

  ngOnInit() {
    this.headerService.doReturn = () => {
      return this.router.navigate(['/elderly', this.elderly.id]);
    };
    this.headerService.showHome = true;
  }

}
