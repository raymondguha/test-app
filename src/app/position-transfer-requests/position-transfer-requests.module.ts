import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PositionTransferRequestsRoutingModule } from './position-transfer-requests-routing.module';
import { PositionTransferRequestsComponent } from './position-transfer-requests.component';
import { PositionTransferRequestsService } from './shared/position-transfer-requests.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
@NgModule({
  declarations: [PositionTransferRequestsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    PositionTransferRequestsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PositionTransferRequestsService
  ]
})
export class PositionTransferRequestsModule { }
