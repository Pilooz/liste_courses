import { Injectable } from '@angular/core';
import { CaregiverClass } from '../domain/caregiver.class';

@Injectable({
  providedIn: 'root'
})
export class CaregiverShareService {

  private _caregiver: CaregiverClass;

  set caregiver(value: CaregiverClass) {
    this._caregiver = value;
  }

  get caregiver() {
    return this._caregiver;
  }

  constructor() { }
}
