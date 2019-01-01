import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferRequest, Client} from './model';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';

const endpoint1 = 'http://localhost:3000/requests';
const endpoint2 = 'http://localhost:3000/clients';

@Injectable()
export class PositionTransferRequestsService {

  constructor(private http: HttpClient) { }

  getPositionTransferRequests(): Observable<TransferRequest[]> {
    return this.http.get<TransferRequest[]>(endpoint1);
    
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(endpoint2);
  }
  
}
