/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderStatsService } from './order-stats.service';

describe('Service: OrderStats', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderStatsService]
    });
  });

  it('should ...', inject([OrderStatsService], (service: OrderStatsService) => {
    expect(service).toBeTruthy();
  }));
});
