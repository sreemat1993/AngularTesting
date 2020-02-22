import { TestBed } from '@angular/core/testing';

import { Project2OneService } from './project2-one.service';

describe('Project2OneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Project2OneService = TestBed.get(Project2OneService);
    expect(service).toBeTruthy();
  });
});
