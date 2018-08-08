import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { ElderlyClass } from '../../../domain/elderly.class';
import { ActivatedRoute, Router } from '@angular/router';
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
  // Get today's date without time
  public today: Date = new Date(moment().format("DD/MM/YYYY"));
  public startDate: Date = this.getMondayOfWeek(this.today);
  public endDate: Date = this.getSundayOfWeek(this.today);

  constructor(private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    this.elderly = this.route.snapshot.data['elderly'];
    this.showIdentity = this.route.snapshot.queryParamMap.get('showIdentity') === 'true';
    this.showFood = this.route.snapshot.queryParamMap.get('showFood') === 'true';
    this.showSkills = this.route.snapshot.queryParamMap.get('showSkills') === 'true';
  }

  ngOnInit() {
    this.headerService.doReturn = () => this.router.navigate(['/home']);
    this.headerService.showHome = false;
  }

  getMondayOfWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? -6 : 1) - day);
  }

  getSundayOfWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? 0 : 7) - day);
  }

}
