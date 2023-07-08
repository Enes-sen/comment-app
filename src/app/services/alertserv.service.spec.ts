import { TestBed } from '@angular/core/testing';

import { AlertservService } from './alertserv.service';

describe('AlertservService', () => {
  let service: AlertservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
