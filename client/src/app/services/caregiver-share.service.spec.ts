import { TestBed, inject } from '@angular/core/testing';

import { CaregiverShareService } from './caregiver-share.service';

describe('CaregiverShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaregiverShareService]
    });
  });

  it('should be created', inject([CaregiverShareService], (service: CaregiverShareService) => {
    expect(service).toBeTruthy();
  }));
});
