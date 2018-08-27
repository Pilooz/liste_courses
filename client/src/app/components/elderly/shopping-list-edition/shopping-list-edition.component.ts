import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AbstractElderlyModifier } from '../../abstract/abstract-elderly-modifier';
import * as moment from 'moment';

// Services
import { HeaderService } from '../../../services/header.services';
import { ElderlyService } from '../../../services/elderly.service';

@Component({
  selector: 'app-shopping-list-edition',
  templateUrl: './shopping-list-edition.component.html',
  styleUrls: ['./shopping-list-edition.component.css']
})
export class ShoppingListEditionComponent extends AbstractElderlyModifier implements OnInit {

  constructor(
    @Inject(ElderlyService) elderlyService: ElderlyService,
    @Inject(ActivatedRoute) route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
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
    return this.elderlyService.sendShoppingListMail(this.elderly.id, today);
  }
}
