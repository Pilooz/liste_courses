import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthenticationService } from '../../services/authentication.service';
import { HeaderService } from '../../services/header.services';
import { MatDialogRef, MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  signoutDialog: MatDialogRef<DialogComponent, any>;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private headerService: HeaderService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  public isConnected() {
    return this.authenticationService.isConnected;
  }

  public get doReturn(): Function {
    return this.headerService.doReturn;
  }

  public get showHome(): boolean {
    return this.headerService.showHome;
  }

  public get showProfile(): boolean {
    return this.headerService.showProfile;
  }

  public get elderlyId(): number {
    return this.headerService.elderlyId;
  }

  /**
   * Open the signout popup dialog
   */
  openSignoutDialog(): void {
    this.signoutDialog = this.dialog.open(DialogComponent, {
      width: '300px',
      panelClass: "dialog",
      data: {
        title: 'Déconnexion',
        body: 'Merci de confirmer la déconnexion.'
      }
    })

    this.signoutDialog.afterClosed().subscribe((res) => {
      if (res) {
        this.authenticationService.signout().subscribe(
          res => {
            this.router.navigate(this.authenticationService.homePage);
          }, err => {
            console.error(err);
          }
        )
      }
    });
  }
}
