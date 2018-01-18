import { TestBed, inject } from '@angular/core/testing';

import { ServJsonFeed6Service } from './serv-json-feed6.service';

describe('ServJsonFeed6Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServJsonFeed6Service]
    });
  });

  it('should be created', inject([ServJsonFeed6Service], (service: ServJsonFeed6Service) => {
    expect(service).toBeTruthy();
  }));
});
