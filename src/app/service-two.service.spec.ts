import { TestBed, inject } from '@angular/core/testing';

import { ServiceTwoService } from './service-two.service';

describe('ServiceTwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceTwoService]
    });
  });

  it('should be created', inject([ServiceTwoService], (service: ServiceTwoService) => {
    expect(service).toBeTruthy();
  }));
});