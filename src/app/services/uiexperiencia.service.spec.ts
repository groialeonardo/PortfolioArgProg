import { TestBed } from '@angular/core/testing';

import { UIexperienciaService } from './uiexperiencia.service';

describe('UIexperienciaService', () => {
  let service: UIexperienciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIexperienciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
