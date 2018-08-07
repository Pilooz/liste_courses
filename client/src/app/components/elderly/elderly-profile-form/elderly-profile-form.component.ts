import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomRegExp } from '../../../util/CustomRegExp';
import { ElderlyService } from '../../../services/elderly.service';
import { HeaderService } from '../../../services/header.services';
import { AbstractElderlyModifier } from '../../abstract/abstract-elderly-modifier';

@Component({
  selector: 'app-elderly-profile-form',
  templateUrl: './elderly-profile-form.component.html',
  styleUrls: ['./elderly-profile-form.component.css']
})
export class ElderlyProfileFormComponent extends AbstractElderlyModifier implements OnInit {

  public readonly today: Date = new Date();

  constructor(@Inject(ElderlyService) elderlyService: ElderlyService,
    @Inject(ActivatedRoute) route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    super(elderlyService, route);
  }

  ngOnInit() {
    this.headerService.doReturn = () => this.router.navigate(['/home']);
    this.headerService.showHome = false;
    this.initForm();
  }

  private initForm() {
    this.elderlyForm = new FormGroup({
      'firstname': new FormControl(this.elderly.firstname, Validators.required),
      'lastname': new FormControl(this.elderly.lastname, Validators.required),
      'birthdate': new FormControl(this.elderly.birthdate),
      'address': new FormControl(this.elderly.address),
      'postalCode': new FormControl(this.elderly.postalCode, Validators.pattern(CustomRegExp.ZIPCODE)),
      'city': new FormControl(this.elderly.city),
      'phone': new FormControl(this.elderly.phone, Validators.pattern(CustomRegExp.PHONE))
    });
  }

  public submitForm(value) {
    Object.assign(this.elderly, value);
    this.save(
      () => this.router.navigate(['/elderly', this.elderly.id, 'food'], { queryParams: { showInfo: true } }),
      () => this.router.navigate(['/elderly', this.elderly.id, 'food'])
    );
  }

}
