import { Injectable } from '@angular/core';
import { Pilot } from './pilot';
import { PILOTS } from './mock-pilots';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private messageService: MessageService) { }

  getPilots(): Observable<Pilot[]> {
    this.messageService.add('PilotService: fetched pilots');
    return of(PILOTS);
  }
}
