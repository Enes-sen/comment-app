import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CommentservService } from './commentserv.service';

describe('CommentservService', () => {
  let service: CommentservService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentservService]
    });
    service = TestBed.inject(CommentservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
