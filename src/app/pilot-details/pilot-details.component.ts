import { Component, OnInit, Input } from '@angular/core';
import { Pilot } from '../pilot';
import { ActivatedRoute } from '@angular/router';
import { PilotService } from '../pilot.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.css']
})
export class PilotDetailsComponent implements OnInit {
  @Input() pilot: Pilot;

  constructor(private route: ActivatedRoute,
              private pilotService: PilotService,
              private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const names = this.route.snapshot.paramMap.get('name_surname')
                                              .split('_', 2);
    const firstName = names[0];
    const lastName  = names[1];

    this.pilotService.getPilot(firstName, lastName).
                      subscribe(pilot => this.pilot = pilot);
  }
}
