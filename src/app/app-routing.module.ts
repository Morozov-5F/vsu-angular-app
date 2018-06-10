import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotsListComponent } from './pilots-list/pilots-list.component';
import { PilotDetailsComponent } from './pilot-details/pilot-details.component';
import { TeamsListComponent } from './teams-list/teams-list.component';

const routes: Routes = [
  { path: 'pilots', component: PilotsListComponent },
  { path: 'pilots/:name_surname', component: PilotDetailsComponent },
  { path: 'teams', component: TeamsListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
