import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {
  pilot: Pilot = {
    number: 14,
    firstName: 'Fernando',
    lastName: 'Alonso',
    team: 'McLaren',
  };

  constructor() { }

  ngOnInit() {
  }

}
