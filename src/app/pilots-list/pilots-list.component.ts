import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

import { PILOTS } from '../mock-pilots';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilots-list',
  templateUrl: './pilots-list.component.html',
  styleUrls: ['./pilots-list.component.css']
})
export class PilotsListComponent implements OnInit {
  pilots: Pilot[];
  selectedPilot: Pilot;

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.getPilots();
  }

  onSelect(pilot: Pilot): void {
    this.selectedPilot = pilot;
  }

  getPilots(): void {
    this.pilotService.getPilots()
                     .subscribe(pilots => this.pilots = pilots);
  }

}
