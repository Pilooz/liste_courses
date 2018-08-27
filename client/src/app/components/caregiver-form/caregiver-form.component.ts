import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CaregiverClass } from '../../domain/caregiver';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomRegExp } from '../../util/CustomRegExp';
import { CaregiverService } from '../../services/caregiver.service';
import { ElderlyClass } from '../../domain/elderly.class';
import { HeaderService } from '../../services/header.services';

@Component({
  selector: 'app-caregiver-form',
  templateUrl: './caregiver-form.component.html',
  styleUrls: ['./caregiver-form.component.css']
})
export class CaregiverFormComponent implements OnInit, Deactivable {

  public elderly: ElderlyClass;
  public caregiver: CaregiverClass;
  public caregiverForm: FormGroup;

  constructor(
    private caregiverService: CaregiverService,
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.elderly = this.route.snapshot.data['elderly'] || new ElderlyClass();
    this.caregiver = this.route.snapshot.data['caregiver'] || new CaregiverClass();

    this.caregiverForm = new FormGroup({
      'firstname': new FormControl(this.caregiver.firstname, Validators.required),
      'lastname': new FormControl(this.caregiver.lastname, Validators.required),
      'address': new FormControl(this.caregiver.address),
      'postalCode': new FormControl(this.caregiver.postalCode, Validators.pattern(CustomRegExp.ZIPCODE)),
      'email': new FormControl(this.caregiver.email),
      'phone': new FormControl(this.caregiver.phone, Validators.pattern(CustomRegExp.PHONE))
    });

    this.headerService.doReturn = () => {
      this.location.back();
    };
  }

  canDeactivate(): boolean {
    return !this.caregiverForm || this.caregiverForm.pristine;
  }

  public submitForm(value) {
    let caregiver = new CaregiverClass(value);

    if (this.caregiver.id) {
      this.caregiverService.update(caregiver).subscribe(res => {
        this.caregiver = res;
        this.caregiverForm.markAsPristine();
        this.router.navigate(['home']);
      }, err => {

      });
    }
    else {
      this.caregiverService.create(this.elderly.id, caregiver).subscribe(res => {
        this.caregiver = res;
        this.caregiverForm.markAsPristine();
        this.router.navigate(['home']);
      }, err => {

      });
    }

  }
}
