import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teams: Team[];

  constructor(private teamService: TeamService,
              private pilotService: PilotService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getTeams()
                    .subscribe(teams => {
                      this.teams = teams;
                      teams.forEach(team => {
                        this.pilotService.getPilotsByTeam(team.id)
                                          .subscribe(pilots => {
                                            team.pilots = pilots;
                                          });
                      });
                    });
  }
}
