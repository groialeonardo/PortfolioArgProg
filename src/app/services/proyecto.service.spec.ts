import { TestBed } from '@angular/core/testing';

import { ProyectoService } from './proyecto.service';

describe('ProyectService', () => {
  let service: ProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
