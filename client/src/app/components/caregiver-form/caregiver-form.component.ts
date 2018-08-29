import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CaregiverClass } from '../../domain/caregiver.class';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomRegExp } from '../../util/CustomRegExp';
import { CaregiverService } from '../../services/caregiver.service';
import { ElderlyClass } from '../../domain/elderly.class';
import { HeaderService } from '../../services/header.services';
import { CaregiverShareService } from '../../services/caregiver-share.service';

@Component({
  selector: 'app-caregiver-form',
  templateUrl: './caregiver-form.component.html',
  styleUrls: ['./caregiver-form.component.css']
})
export class CaregiverFormComponent implements OnInit, Deactivable {

  public elderly: ElderlyClass;
  public caregiverForm: FormGroup;

  constructor(
    private caregiverService: CaregiverService,
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
    private location: Location,
    private caregiverShareService: CaregiverShareService
  ) {
  }

  ngOnInit() {
    this.elderly = this.route.snapshot.data['elderly'] || new ElderlyClass();
    this.caregiverShareService.caregiver = this.caregiverShareService.caregiver
      || this.route.snapshot.data['caregiver']
      || new CaregiverClass();

    this.caregiverForm = new FormGroup({
      'firstname': new FormControl(this.caregiverShareService.caregiver.firstname, Validators.required),
      'lastname': new FormControl(this.caregiverShareService.caregiver.lastname, Validators.required),
      'address': new FormControl(this.caregiverShareService.caregiver.address),
      'postalCode': new FormControl(this.caregiverShareService.caregiver.postalCode, Validators.pattern(CustomRegExp.ZIPCODE)),
      'email': new FormControl(this.caregiverShareService.caregiver.email),
      'phone': new FormControl(this.caregiverShareService.caregiver.phone)
    });

    this.headerService.doReturn = () => {
      this.location.back();
    };
  }

  canDeactivate(): boolean {
    return !this.caregiverForm || this.caregiverForm.pristine;
  }

  public submitForm(value) {
    Object.assign(this.caregiverShareService.caregiver, new CaregiverClass(value));

    if (this.caregiverShareService.caregiver.id) {
      this.caregiverService.update(this.caregiverShareService.caregiver).subscribe(res => {
        this.caregiverShareService.caregiver = res;
        this.caregiverForm.markAsPristine();
        this.router.navigate(['../caregiver-availability'], { relativeTo: this.route });
      }, err => {

      });
    }
    else {
      this.caregiverService.create(this.elderly.id, this.caregiverShareService.caregiver).subscribe(res => {
        this.caregiverShareService.caregiver = res;
        this.caregiverForm.markAsPristine();
        this.router.navigate(['../caregiver-availability'], { relativeTo: this.route });
      }, err => {

      });
    }

  }
}
