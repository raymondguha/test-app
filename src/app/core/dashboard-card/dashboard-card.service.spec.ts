import { TestBed } from '@angular/core/testing';

import { DashboardCardService } from './dashboard-card.service';

describe('DashboardCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardCardService = TestBed.get(DashboardCardService);
    expect(service).toBeTruthy();
  });
});
