import { TestBed } from '@angular/core/testing';

import { BookInfoRestService } from './book-info-rest.service';

describe('BookInfoRestService', () => {
  let service: BookInfoRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookInfoRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
