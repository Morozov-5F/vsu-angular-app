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
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';
import { TeamComponent } from './team/team.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { ReplacePipe } from './replace.pipe';
import { ZeroFormatPipe } from './zero-format.pipe';
import { AdminPilotsComponent } from './admin-pilots/admin-pilots.component';
import { AdminTeamsComponent } from './admin-teams/admin-teams.component';
import { UndefinedFormatPipe } from './undefined-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PilotsListComponent,
    ToolbarComponent,
    PilotDetailsComponent,
    PilotComponent,
    MessagesComponent,
    TeamComponent,
    TeamsListComponent,
    TeamDetailsComponent,
    ReplacePipe,
    ZeroFormatPipe,
    AdminPilotsComponent,
    AdminTeamsComponent,
    UndefinedFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 20 }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
