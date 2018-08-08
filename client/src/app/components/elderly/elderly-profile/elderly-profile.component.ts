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

  constructor(private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    this.elderly = this.route.snapshot.data['elderly'];
  }

  ngOnInit() {
    this.headerService.doReturn = () => this.router.navigate(['/home']);
  }

}
