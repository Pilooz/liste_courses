import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    this.elderly = this.route.snapshot.data['elderly'];
    this.showIdentity = this.route.snapshot.queryParamMap.get('showIdentity') === 'true';
    this.showFood = this.route.snapshot.queryParamMap.get('showFood') === 'true';
  }

  ngOnInit() {
    this.headerService.doReturn = () => this.router.navigate(['/home']);
    this.headerService.showHome = false;
  }

}
