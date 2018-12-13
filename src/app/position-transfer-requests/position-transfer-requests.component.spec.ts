import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTransferRequestsComponent } from './position-transfer-requests.component';

describe('PositionTransferRequestsComponent', () => {
  let component: PositionTransferRequestsComponent;
  let fixture: ComponentFixture<PositionTransferRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionTransferRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTransferRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
