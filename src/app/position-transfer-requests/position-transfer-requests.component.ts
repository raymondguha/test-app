import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PositionTransferRequestsService } from './shared/position-transfer-requests.service';
import { TransferRequest, Client } from './shared/model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, startWith, map, distinctUntilChanged } from 'rxjs/operators';
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

  $filteredClientOptions: Observable<Client[]>;

  clientFormControl = new FormControl();

  selectedClients: Client[] = new Array<Client>();

  @ViewChild('clientName') el: ElementRef;


  ngOnInit() {
    this.apiService.getPositionTransferRequests().subscribe(
      reqs => {        
        this.$noOfRequests.next(reqs[0].hits)
      }
    );

    //we can skip subcribng to the observable and storing results
    //locally on the coponent. we can do this by using the async pipe in the templates
    // this.$clients = this.apiService.getClients();

    this.apiService.getClients().subscribe(
      clients => {        
        this.clients = clients;
        this.createControl();
      }    
    );
    
  }


  createControl(): void {
    this.clientFormControl = new FormControl();
     this.$filteredClientOptions = this.clientFormControl.valueChanges.pipe(
      debounceTime(250),
      startWith<string | Client>(''),
      distinctUntilChanged(),
      map(value => typeof value === 'string'? value : value.name),
      map(name => name ? this.filterClients(name) : this.clients.slice()),
    )

    this.clientFormControl.valueChanges.subscribe(client => {
      if (client === null || typeof client === 'string') {
        return;
      }
      this.selectedClients.push(client);
      let i = this.clients.findIndex(c => c.name.toLowerCase() === client.name.toLowerCase());
      this.clients.splice(i,1);
      //we need to recreate control again so the autocomplete displays
      this.createControl();
    })
  }

  //remove focus once a valid client has been selected
  blur() {
    this.el.nativeElement.value = '';
    this.el.nativeElement.blur();
  }

  private filterClients(name: string): Client[] {
    const filterValue = name.toLowerCase();

    return this.clients.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayClientFn(client?: Client): string | undefined {
    return client ? client.name : undefined;
  }

}
