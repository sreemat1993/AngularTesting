import { TestBed, inject } from '@angular/core/testing';

import { ServiceSharedTwoService } from './service-shared-two.service';

describe('ServiceSharedTwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceSharedTwoService]
    });
  });

  it('should be created', inject([ServiceSharedTwoService], (service: ServiceSharedTwoService) => {
    expect(service).toBeTruthy();
  }));
});