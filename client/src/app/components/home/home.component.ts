import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';
import { ElderlyClass } from '../../domain/elderly.class';
import { ElderlyService } from '../../services/elderly.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public authenticationForm: FormGroup;
  public email: string;
  public password: string;
  public elderlies: ElderlyClass[] = [];

  constructor(private authenticationService: AuthenticationService,
    private elderlyService: ElderlyService) { }

  ngOnInit() {
    this.initForm();
    if (this.authenticationService.isConnected) {
      this.loadElderlies();
    }
  }

  private initForm() {
    this.authenticationForm = new FormGroup({
      'email': new FormControl(this.email, [Validators.required, Validators.email]),
      'password': new FormControl(this.password, Validators.required),
    });
  }

  public isConnected() {
    return this.authenticationService.isConnected;
  }

  public submitForm(formValues) {
    this.authenticationService.signin(formValues.email, formValues.password).subscribe(() => this.loadElderlies());
  }

  private loadElderlies() {
    this.elderlyService.getAll().subscribe((elderlies) => this.elderlies = elderlies);
  }
}
