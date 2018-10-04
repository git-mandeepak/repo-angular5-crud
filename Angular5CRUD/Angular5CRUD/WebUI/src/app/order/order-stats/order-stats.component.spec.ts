/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrderStatsComponent } from './order-stats.component';

describe('OrderStatsComponent', () => {
  let component: OrderStatsComponent;
  let fixture: ComponentFixture<OrderStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
