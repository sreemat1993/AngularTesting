import { TestBed } from '@angular/core/testing';

import { ServiceSharedTwoService } from './service-shared-two.service';

describe('ServiceSharedTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceSharedTwoService = TestBed.get(ServiceSharedTwoService);
    expect(service).toBeTruthy();
  });
});
