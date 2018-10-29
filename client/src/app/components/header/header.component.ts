import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  authenticate() {
    this.authenticationService.signin('user@domain.com', 'password').subscribe(
      () => {
        this.router.navigate(this.authenticationService.homePage);
      }
    );
  }

  logoff() {
    this.authenticationService.signout().subscribe(
      () => {
        this.router.navigate(this.authenticationService.homePage);
      }
    )
  }

  isConnected() {
    return this.authenticationService.isConnected;
  }
}
