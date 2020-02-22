import { TestBed } from '@angular/core/testing';

import { Project2TwoService } from './project2-two.service';

describe('Project2TwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Project2TwoService = TestBed.get(Project2TwoService);
    expect(service).toBeTruthy();
  });
});
