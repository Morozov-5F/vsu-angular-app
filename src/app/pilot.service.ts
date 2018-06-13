import { Injectable } from '@angular/core';
import { Pilot } from './pilot';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map, tap, flatMap, mergeMap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5';
import { Team } from './team';
import { TeamService } from './team.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  private pilotsUrl = 'api/pilots';
  private pilotsInTeamsUrl = 'api/pilotsInTeams';

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private teamsService: TeamService) { }

  private log(message: string) {
    this.messageService.add('PilotService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(this.pilotsUrl).pipe(
      tap(pilots => this.log(`fetched pilots`)),
      catchError(this.handleError('getPilots', []))
    );
  }

  getPilot(id: string): Observable<Pilot> {
    const url = `${this.pilotsUrl}/${id}`;
    return this.http.get<Pilot>(url).pipe(
      tap(_ => this.log(`fetched pilot id=${id}`)),
      catchError(this.handleError<Pilot>(`getPilot id=${id}`))
  );
  }

  getPilotByName(firstName: string, lastName: string): Observable<Pilot> {
    const md5 = new Md5();
    const hash_base = `${firstName}_${lastName}`.toLowerCase();
    this.log(`hash base: ${hash_base}`);
    const id = md5.appendStr(hash_base).end().toString();

    return this.getPilot(id);
  }

  getPilotTeam(id: string): Observable<Team> {
    return this.getPilot(id).pipe(
      mergeMap(pilot => {
        const teamId = pilot.teamId;
        return this.teamsService.getTeam(teamId);
      }),
      tap(_ => this.log(`fetched team for pilot id=${id}`)),
      catchError(this.handleError<Team>(`getPilotTeam id=${id}`))
    );
  }

  getPilotsByTeam(teamId: number): Observable<Pilot[]> {
    const url = `${this.pilotsUrl}?teamId=${teamId}`;
    return this.http.get<Pilot[]>(url).pipe(
      tap(_ => this.log(`fetched pilots for teamId=${teamId}`)),
      catchError(this.handleError<Pilot[]>(`getPilotByTeam teamId=${teamId}`))
    );
  }

  updatePilot(pilot: Pilot): Observable<any> {
    const pilotTransfer: any = {};
    Object.assign(pilotTransfer, pilot);
    delete pilotTransfer.team;
    console.log(pilotTransfer);

    return this.http.put(this.pilotsUrl, pilotTransfer, httpOptions).pipe(
        tap(_ => this.log(`updated pilot id=${pilot.id}`)),
        catchError(this.handleError<any>('updatePilot'))
      );
  }

  addPilot(newPilot: Pilot): Observable<Pilot> {
    return this.http.post<Pilot>(this.pilotsUrl, newPilot, httpOptions).pipe(
        tap((pilot: Pilot) => this.log(`added pilot w/ id=${pilot.id}`)),
        catchError(this.handleError<Pilot>('addPilot'))
      );
  }

  deletePilot(pilot: Pilot | string): Observable<Pilot> {
    const id = typeof pilot === 'string' ? pilot : pilot.id;
    const url = `${this.pilotsUrl}/${id}`;

    return this.http.delete<Pilot>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted pilot id=${id}`)),
        catchError(this.handleError<Pilot>('detelePilot')));
  }
}
