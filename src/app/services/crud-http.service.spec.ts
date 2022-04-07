import { TestBed } from '@angular/core/testing';

import { CRUDHttpService } from './crud-http.service';

describe('CRUDHttpService', () => {
  let service: CRUDHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
