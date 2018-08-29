import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ElderlyClass } from '../../domain/elderly.class';
import { CaregiverClass } from '../../domain/caregiver.class';
import { FormGroup, FormControl } from '@angular/forms';
import { CaregiverService } from '../../services/caregiver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../services/header.services';
import { CaregiverShareService } from '../../services/caregiver-share.service';

@Component({
  selector: 'app-caregiver-availability-form',
  templateUrl: './caregiver-availability-form.component.html',
  styleUrls: ['./caregiver-availability-form.component.css']
})
export class CaregiverAvailabilityFormComponent implements OnInit, Deactivable {

  public elderly: ElderlyClass;
  public shoppingForm: FormGroup;

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

    this.shoppingForm = new FormGroup({
      'shoppingFrequency': new FormControl(this.caregiverShareService.caregiver.shoppingFrequency),
      'remarks': new FormControl(this.caregiverShareService.caregiver.remarks)
    });

    this.headerService.doReturn = () => {
      this.location.back();
    };
  }

  canDeactivate(): boolean {
    return !this.shoppingForm || this.shoppingForm.pristine;
  }

  public submitForm(value) {
    Object.assign(this.caregiverShareService.caregiver, new CaregiverClass(value));

    if (this.caregiverShareService.caregiver.id) {
      this.caregiverService.update(this.caregiverShareService.caregiver).subscribe(res => {
        this.caregiverShareService.caregiver = res;
        this.shoppingForm.markAsPristine();
        this.router.navigate(['home']);
      }, err => {

      });
    }
    else {
      this.caregiverService.create(this.elderly.id, this.caregiverShareService.caregiver).subscribe(res => {
        this.caregiverShareService.caregiver = res;
        this.shoppingForm.markAsPristine();
        this.router.navigate(['home']);
      }, err => {

      });
    }

  }
}
