import { TestBed } from '@angular/core/testing';

import { Project1OneService } from './project1-one.service';

describe('Project1OneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Project1OneService = TestBed.get(Project1OneService);
    expect(service).toBeTruthy();
  });
});
