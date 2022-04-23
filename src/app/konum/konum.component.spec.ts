/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KonumComponent } from './konum.component';

describe('KonumComponent', () => {
  let component: KonumComponent;
  let fixture: ComponentFixture<KonumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
