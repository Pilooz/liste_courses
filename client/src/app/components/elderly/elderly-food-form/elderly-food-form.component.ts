import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElderlyClass } from '../../../domain/elderly.class';

@Component({
  selector: 'app-elderly-food-form',
  templateUrl: './elderly-food-form.component.html',
  styleUrls: ['./elderly-food-form.component.css']
})
export class ElderlyFoodFormComponent implements OnInit {

  public showInfo: boolean = false;
  public elderly: ElderlyClass;

  constructor(private route: ActivatedRoute) {
    this.showInfo = this.route.snapshot.queryParamMap.get('showInfo') === 'true';
    this.elderly = this.route.snapshot.data['elderly'];
  }

  ngOnInit() {
  }

}
