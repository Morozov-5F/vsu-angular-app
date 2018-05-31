import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

import { PILOTS } from '../mock-pilots';

@Component({
  selector: 'app-pilots-list',
  templateUrl: './pilots-list.component.html',
  styleUrls: ['./pilots-list.component.css']
})
export class PilotsListComponent implements OnInit {
  pilots = PILOTS;
  selectedPilot: Pilot;

  constructor() { }

  ngOnInit() {
  }

  onSelect(pilot: Pilot): void {
    this.selectedPilot = pilot;
  }

}
