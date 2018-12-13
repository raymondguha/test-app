import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PositionTransferRequestsComponent } from './position-transfer-requests.component';

const routes: Routes = [
  { path: '', component:  PositionTransferRequestsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionTransferRequestsRoutingModule { }
