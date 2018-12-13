import { TestBed } from '@angular/core/testing';

import { PositionTransferRequestsService } from './position-transfer-requests.service';

describe('PositionTransferRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositionTransferRequestsService = TestBed.get(PositionTransferRequestsService);
    expect(service).toBeTruthy();
  });
});
