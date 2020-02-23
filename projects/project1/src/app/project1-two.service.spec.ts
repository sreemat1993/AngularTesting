import { TestBed, inject } from '@angular/core/testing';

import { Project1TwoService } from './project1-two.service';

describe('Project1TwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Project1TwoService]
    });
  });

  it('should be created', inject([Project1TwoService], (service: Project1TwoService) => {
    expect(service).toBeTruthy();
  }));
});