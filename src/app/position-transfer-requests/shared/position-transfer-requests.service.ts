import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferRequest} from './model';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';

const endpoint = 'http://localhost:3000/requests';

@Injectable()
export class PositionTransferRequestsService {

  constructor(private http: HttpClient) { }

  getPositionTransferRequests(): Observable<TransferRequest[]> {
    return this.http.get<TransferRequest[]>(endpoint);
    
  }
}
