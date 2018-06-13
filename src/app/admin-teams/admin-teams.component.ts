import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { PilotService } from '../pilot.service';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {
  @Input() teams: Team[];
  @Input() pilots: Pilot[];
  editCellId: string;
  pilotIdOldValue: string;

  constructor(private teamService: TeamService,
              private pilotService: PilotService) { }

  toggleCellInput(cellId: any) {
    this.editCellId = cellId;
  }

  finishEditing(event: any, team: Team) {
    if (event.key === 'Enter') {
      this.toggleCellInput('');
      this.teamService.updateTeam(team).subscribe((() => {
        this.refreshTeams();
      }));
    }
  }

  makeCellId(team: Team, fieldName: string) {
    return team.id.toString().concat(fieldName);
  }

  refreshTeams() {
    this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
      teams.forEach(team => {
        this.pilotService.getPilotsByTeam(team.id)
                         .subscribe(pilots => {
                          team.pilots = pilots;
                        });
      });
    });
  }

  refreshPilots() {
    this.pilotService.getPilots().subscribe(pilots => this.pilots = pilots);
  }

  ngOnInit() {
    this.refreshTeams();
    this.refreshPilots();
  }

  updatePilot(event: any, team: Team) {
    const oldPilotId = this.pilotIdOldValue;
    const newPilotId: string = event.target.value.split(': ')[1];

    const oldPilot = this.pilots.filter(pilot => pilot.id === oldPilotId)[0];
    const newPilot = this.pilots.filter(pilot => pilot.id === newPilotId)[0];

    if (oldPilot) {
      oldPilot.teamId = 0;
    }
    newPilot.teamId = team.id;

    if (oldPilot) {
      this.pilotService.updatePilot(oldPilot).subscribe();
    }

    this.pilotService.updatePilot(newPilot).subscribe(() => {
      this.teamService.updateTeam(team).subscribe(() => {
          this.refreshPilots();
          this.refreshTeams();
      });
    });
  }

  updateOldValue(pilotId: string) {
    this.pilotIdOldValue = pilotId;
  }

  addPilot(team: Team) {
    const newPilot: Pilot = {
        id: '',
        firstName: '',
        lastName: '',
        number: 0,
        teamId: team.id,
        team: null,
      };
    team.pilots.push(newPilot);
  }

  addTeam() {
    const newTeam: Team = {
      id: this.teams.length + 1,
      name: null,
      country: null,
      color: null,
      podiums: null,
      champions: null,
      fullName: null,
      base: null,
      teamChief: null,
      powerUnit: null,
      firstEntry: null,
      worldChampionships: null,
      polePositions: null,
      pilots: [],
    };
    this.teams.push(newTeam);
  }
}
