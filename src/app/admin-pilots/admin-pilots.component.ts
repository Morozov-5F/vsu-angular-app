import { Component, OnInit, Input } from '@angular/core';
import { Pilot } from '../pilot';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { PilotService } from '../pilot.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-admin-pilots',
  templateUrl: './admin-pilots.component.html',
  styleUrls: ['./admin-pilots.component.css']
})
export class AdminPilotsComponent implements OnInit {
  @Input() pilots: Pilot[];
  @Input() teams: Team[];
  editCellId: string;
  teamIdOldValue: number;

  constructor(private teamService: TeamService,
              private pilotService: PilotService) { }

  ngOnInit() {
    this.refreshPilots();
    this.refreshTeams();
  }

  makeCellId(pilot: Pilot, fieldName: string) {
    return pilot.id.concat(fieldName);
  }

  toggleCellInput(cellId: any) {
    this.editCellId = cellId;
  }

  finishEditing(event: any, pilot: Pilot) {
    if (event.key === 'Enter') {
      const md5 = new Md5();
      const id = md5.appendStr(`${pilot.firstName} ${pilot.lastName}`).end().toString();
      this.toggleCellInput('');

      this.pilotService.updatePilot(pilot).subscribe(() => this.refreshPilots());
    }
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

  updateTeam(event: any, pilot: Pilot) {
    const oldId = this.teamIdOldValue;
    const newId = Number(event.target.value.split(': ')[1]);

    const oldTeam = this.teams.filter(team => team.id === oldId)[0];
    const newTeam = this.teams.filter(team => team.id === newId)[0];

    console.log(this.teams);
    console.log(oldId);
    console.log(newId);

    console.log(oldTeam);
    console.log(newTeam);

    pilot.teamId = newId;
    this.pilotService.updatePilot(pilot).subscribe(() => this.refreshPilots());

    newTeam.pilots.push(pilot);

    this.teamService.updateTeam(newTeam).subscribe(() => {
      if (oldTeam) {
        oldTeam.pilots = oldTeam.pilots.filter(p => p.id !== pilot.id);
        this.teamService.updateTeam(oldTeam).subscribe(() => this.refreshTeams());
      }
      else {
        this.refreshTeams();
      }
    });
  }

  updateOldValue(teamId: number) {
    this.teamIdOldValue = teamId;
  }

  addPilot() {
    const md5 = new Md5();
    const id = md5.appendStr('Firstname Lastname').end().toString();
    const newPilot: Pilot = {
        id: id,
        firstName: 'Firstname',
        lastName: 'Lastname',
        number: 0,
        teamId: 0,
        team: null,
      };
    this.pilots.push(newPilot);
  }
}
