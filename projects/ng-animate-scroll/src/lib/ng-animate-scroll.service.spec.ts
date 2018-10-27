import { TestBed, inject } from '@angular/core/testing';

import { NgAnimateScrollService } from './ng-animate-scroll.service';

describe('NgAnimateScrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgAnimateScrollService]
    });
  });

  it('should be created', inject([NgAnimateScrollService], (service: NgAnimateScrollService) => {
    expect(service).toBeTruthy();
  }));
});
