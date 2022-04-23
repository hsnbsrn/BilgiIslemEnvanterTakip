/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersService } from './pers.service';

describe('Service: Pers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersService]
    });
  });

  it('should ...', inject([PersService], (service: PersService) => {
    expect(service).toBeTruthy();
  }));
});
