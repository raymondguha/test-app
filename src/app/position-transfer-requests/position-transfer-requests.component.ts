import { Component, OnInit } from '@angular/core';
import { PositionTransferRequestsService } from './shared/position-transfer-requests.service';
import { TransferRequest, Client } from './shared/model';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, startWith, map } from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'da-position-transfer-requests',
  templateUrl: './position-transfer-requests.component.html',
  styleUrls: ['./position-transfer-requests.component.scss']
})
export class PositionTransferRequestsComponent implements OnInit {

  constructor(private apiService: PositionTransferRequestsService) { }

  $noOfRequests: BehaviorSubject<number> = new BehaviorSubject(0);

  $clients: Observable<Client[]>;

  clients: Client[];

  filteredClientOptions: Observable<Client[]>;

  clientFormControl = new FormControl();


  ngOnInit() {
    this.apiService.getPositionTransferRequests().subscribe(
      reqs => {        
        this.$noOfRequests.next(reqs[0].hits)
      }
    );

    //we can skip subcribng to the observable and storing results
    //locally on the coponent. we can do this by using the async pipe in the templates
  //  this.$clients = this.apiService.getClients();

  this.apiService.getClients().subscribe(
    clients => {        
      this.clients = clients;

      this.filteredClientOptions = this.clientFormControl.valueChanges.pipe(
        debounceTime(250),
        startWith<string | Client>(''),
        map(value => typeof value === 'string'? value : value.name),
        map(name => name ? this.filterClients(name) : this.clients)
       // map(name => name ? this.filterClients(name) : this.$clients.pipe(map( d => d.slice())) )
      );
    }
    
  );
  
 
    
  }

  private filterClients(name: string): any {
    const filterValue = name.toLowerCase();

    // return this.$clients.pipe(
    //   map(clients => { clients.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0) })
    // );

    return this.clients.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayClientFn(client?: Client): string | undefined {
    return client ? client.name : undefined;
  }

}
