import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public readonly notificationOptions: { showProgressBar: boolean, timeOut: number } = {
    showProgressBar: true,
    timeOut: 3000
  }

  constructor() {
    moment.locale('fr');
  }
}
