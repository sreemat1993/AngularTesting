import { TestBed } from '@angular/core/testing';

import { Project1TwoService } from './project1-two.service';

describe('Project1TwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Project1TwoService = TestBed.get(Project1TwoService);
    expect(service).toBeTruthy();
  });
});
