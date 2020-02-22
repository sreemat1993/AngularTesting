import { TestBed } from '@angular/core/testing';

import { ServiceSharedOneService } from './service-shared-one.service';

describe('ServiceSharedOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceSharedOneService = TestBed.get(ServiceSharedOneService);
    expect(service).toBeTruthy();
  });
});
