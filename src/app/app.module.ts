import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PilotsComponent } from './pilots/pilots.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PilotDetailsComponent } from './pilot-details/pilot-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotsComponent,
    ToolbarComponent,
    PilotDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
