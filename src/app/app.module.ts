import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // PositionTransferRequestsModule // remove for lazy loading to work
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
