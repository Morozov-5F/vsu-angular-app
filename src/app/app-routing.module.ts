import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotsListComponent } from './pilots-list/pilots-list.component';
import { PilotDetailsComponent } from './pilot-details/pilot-details.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { AdminTeamsComponent } from './admin-teams/admin-teams.component';

const routes: Routes = [
  { path: 'pilots', component: PilotsListComponent },
  { path: 'pilots/:name_surname', component: PilotDetailsComponent },
  { path: 'teams', component: TeamsListComponent },
  { path: 'teams/:name', component: TeamDetailsComponent },
  { path: 'admin', component: AdminTeamsComponent },
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
