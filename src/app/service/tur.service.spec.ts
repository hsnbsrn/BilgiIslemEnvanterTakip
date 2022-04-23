/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TurService } from './tur.service';

describe('Service: Tur', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurService]
    });
  });

  it('should ...', inject([TurService], (service: TurService) => {
    expect(service).toBeTruthy();
  }));
});
