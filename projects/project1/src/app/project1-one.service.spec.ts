import { TestBed, inject } from '@angular/core/testing';

import { Project1OneService } from './project1-one.service';

describe('Project1OneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Project1OneService]
    });
  });

  it('should be created', inject([Project1OneService], (service: Project1OneService) => {
    expect(service).toBeTruthy();
  }));
});