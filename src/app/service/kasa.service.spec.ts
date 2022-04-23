/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KasaService } from './kasa.service';

describe('Service: Kasa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KasaService]
    });
  });

  it('should ...', inject([KasaService], (service: KasaService) => {
    expect(service).toBeTruthy();
  }));
});
