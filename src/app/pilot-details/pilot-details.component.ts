import { Component, OnInit, Input } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.css']
})
export class PilotDetailsComponent implements OnInit {
  @Input() pilot: Pilot;

  constructor() { }

  ngOnInit() {
  }

}
