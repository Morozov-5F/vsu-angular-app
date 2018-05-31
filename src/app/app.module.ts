import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PilotsListComponent } from './pilots-list/pilots-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PilotDetailsComponent } from './pilot-details/pilot-details.component';
import { PilotComponent } from './pilot/pilot.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotsListComponent,
    ToolbarComponent,
    PilotDetailsComponent,
    PilotComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
