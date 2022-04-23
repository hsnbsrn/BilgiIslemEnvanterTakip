/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CihazComponent } from './cihaz.component';

describe('CihazComponent', () => {
  let component: CihazComponent;
  let fixture: ComponentFixture<CihazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CihazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CihazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
