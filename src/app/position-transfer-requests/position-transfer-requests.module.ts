import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PositionTransferRequestsRoutingModule } from './position-transfer-requests-routing.module';
import { PositionTransferRequestsComponent } from './position-transfer-requests.component';
import { PositionTransferRequestsService } from './shared/position-transfer-requests.service';

@NgModule({
  declarations: [PositionTransferRequestsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PositionTransferRequestsRoutingModule
  ],
  providers: [
    PositionTransferRequestsService
  ]
})
export class PositionTransferRequestsModule { }
