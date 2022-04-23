/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CihazService } from './cihaz.service';

describe('Service: Cihaz', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CihazService]
    });
  });

  it('should ...', inject([CihazService], (service: CihazService) => {
    expect(service).toBeTruthy();
  }));
});
