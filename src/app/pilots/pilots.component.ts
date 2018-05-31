import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

import { PILOTS } from '../mock-pilots';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {
  pilots = PILOTS;
  selectedPilot: Pilot;

  constructor() { }

  ngOnInit() {
  }

  onSelect(pilot: Pilot): void {
    this.selectedPilot = pilot;
  }

}
