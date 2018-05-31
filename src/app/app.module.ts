import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PilotsListComponent } from './pilots-list/pilots-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PilotDetailsComponent } from './pilot-details/pilot-details.component';
import { PilotComponent } from './pilot/pilot.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotsListComponent,
    ToolbarComponent,
    PilotDetailsComponent,
    PilotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
