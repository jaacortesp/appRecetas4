import { TestBed } from '@angular/core/testing';

import { ServicioDBService } from './servicio-db.service'; // Cambiado 'ServicioDbService' a 'ServicioDBService'

describe('ServicioDBService', () => { // Cambiado 'ServicioDbService' a 'ServicioDBService'
  let service: ServicioDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

