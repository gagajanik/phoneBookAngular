import { TestBed, inject } from '@angular/core/testing';

import { PassResService } from './pass-res.service';

describe('PassResService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassResService]
    });
  });

  it('should be created', inject([PassResService], (service: PassResService) => {
    expect(service).toBeTruthy();
  }));
});
