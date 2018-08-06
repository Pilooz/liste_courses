import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public authenticationForm: FormGroup;
  public email: string;
  public password: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.authenticationForm = new FormGroup({
      'email': new FormControl(this.email, Validators.email),
      'password': new FormControl(this.password),
    });
  }

  isConnected() {
    return this.authenticationService.isConnected;
  }

  submitForm(formValues) {
    this.authenticationService.signin(formValues.email, formValues.password).subscribe(res => {
      console.log(res);
    }, err => {
      console.error(err);
    });
  }
}
