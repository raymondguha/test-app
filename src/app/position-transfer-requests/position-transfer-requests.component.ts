import { Component, OnInit } from '@angular/core';
import { PositionTransferRequestsService } from './shared/position-transfer-requests.service';
import { TransferRequest } from './shared/model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'da-position-transfer-requests',
  templateUrl: './position-transfer-requests.component.html',
  styleUrls: ['./position-transfer-requests.component.scss']
})
export class PositionTransferRequestsComponent implements OnInit {

  constructor(private apiService: PositionTransferRequestsService) { }

  $noOfRequests: BehaviorSubject<number> = new BehaviorSubject(0);

  ngOnInit() {
    this.apiService.getPositionTransferRequests().subscribe(
      reqs => {        
        this.$noOfRequests.next(reqs[0].hits)
      }
    );
  }

}
