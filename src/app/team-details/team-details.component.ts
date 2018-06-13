import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { PilotService } from '../pilot.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  @Input() team: Team;

  constructor(private teamService: TeamService,
              private pilotService: PilotService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name').toLowerCase();

    this.teamService.getTeamByName(name).
                      subscribe(team => {
                        this.team = team[0];
                        this.pilotService.getPilotsByTeam(this.team.id)
                                         .subscribe(pilots => {
                                           this.team.pilots = pilots;
                                         })
                      });
  }
}
