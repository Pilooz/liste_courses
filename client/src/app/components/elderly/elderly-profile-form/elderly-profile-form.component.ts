import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-elderly-profile-form',
  templateUrl: './elderly-profile-form.component.html',
  styleUrls: ['./elderly-profile-form.component.css']
})
export class ElderlyProfileFormComponent implements OnInit {

  public profileForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.profileForm = new FormGroup({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'birthdate': new FormControl('')
    });
  }

}
