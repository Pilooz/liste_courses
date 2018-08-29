import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

// Classes
import { CaregiverClass } from '../../domain/caregiver.class';
import { ElderlyClass } from '../../domain/elderly.class';

// Services
import { CaregiverService } from '../../services/caregiver.service';
import { HeaderService } from '../../services/header.services';

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
  ) {
    this.elderly = this.route.snapshot.data['elderly'] || new ElderlyClass();
  }

  ngOnInit() {
    this.shoppingForm = new FormGroup({
      'shoppingFrequency': new FormControl(this.elderly.caregivers.shoppingFrequency),
      'remarks': new FormControl(this.elderly.caregivers.remarks)
    });

    this.headerService.doReturn = () => {
      this.location.back();
    };
    this.headerService.showHome = true;
    this.headerService.showProfile = true;
    this.headerService.elderlyId = this.elderly.id;
  }

  canDeactivate(): boolean {
    return !this.shoppingForm || this.shoppingForm.pristine;
  }

  public submitForm(value) {
    Object.assign(this.elderly.caregivers, new CaregiverClass(value));

    if (this.elderly.caregivers.id) {
      this.caregiverService.update(this.elderly.caregivers).subscribe(res => {
        this.elderly.caregivers = res;
        this.shoppingForm.markAsPristine();
        this.router.navigate(['/elderly', this.elderly.id]);
      });
    }
    else {
      this.caregiverService.create(this.elderly.id, this.elderly.caregivers).subscribe(res => {
        this.elderly.caregivers = res;
        this.shoppingForm.markAsPristine();
        this.router.navigate(['/elderly', this.elderly.id]);
      });
    }
  }
}
