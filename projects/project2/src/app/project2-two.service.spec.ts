import { TestBed, inject } from '@angular/core/testing';

import { Project2TwoService } from './project2-two.service';

describe('Project2TwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Project2TwoService]
    });
  });

  it('should be created', inject([Project2TwoService], (service: Project2TwoService) => {
    expect(service).toBeTruthy();
  }));
});