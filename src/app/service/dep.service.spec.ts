/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DepService } from './dep.service';

describe('Service: Dep', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepService]
    });
  });

  it('should ...', inject([DepService], (service: DepService) => {
    expect(service).toBeTruthy();
  }));
});
