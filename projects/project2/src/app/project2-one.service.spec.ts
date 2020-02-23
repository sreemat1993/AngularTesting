import { TestBed, inject } from '@angular/core/testing';

import { Project2OneService } from './project2-one.service';

describe('Project2OneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Project2OneService]
    });
  });

  it('should be created', inject([Project2OneService], (service: Project2OneService) => {
    expect(service).toBeTruthy();
  }));
});