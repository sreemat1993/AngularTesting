import { TestBed, inject } from '@angular/core/testing';

import { ServiceSharedOneService } from './service-shared-one.service';

describe('ServiceSharedOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceSharedOneService]
    });
  });

  it('should be created', inject([ServiceSharedOneService], (service: ServiceSharedOneService) => {
    expect(service).toBeTruthy();
  }));
});