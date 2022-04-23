/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KonumService } from './konum.service';

describe('Service: Konum', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KonumService]
    });
  });

  it('should ...', inject([KonumService], (service: KonumService) => {
    expect(service).toBeTruthy();
  }));
});
