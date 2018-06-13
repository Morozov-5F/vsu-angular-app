import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Team } from './team';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamsUrl = 'api/teams';
  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('TeamService: ' + message);
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

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl).pipe(
      tap(Teams => this.log(`fetched teams`)),
      catchError(this.handleError('getTeams', []))
    );
  }

  getTeamByName(name: string): Observable<Team[]> {
    const url = `${this.teamsUrl}?name=${name}`;
    return this.http.get<Team[]>(url).pipe(
      tap(_ => this.log(`fetched team name=${name}`)),
      catchError(this.handleError<Team[]>(`getTeamByName name=${name}`))
    );
  }

  getTeam(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/${id}`;

    return this.http.get<Team>(url).pipe(
      tap(_ => this.log(`fetched team id=${id}`)),
      catchError(this.handleError<Team>(`getTeam id=${id}`))
    );
  }

  updateTeam(team: Team): Observable<any> {
    team.pilots = null;
    return this.http.put(this.teamsUrl, Team, httpOptions).pipe(
        tap(_ => this.log(`updated Team id=${team.id}`)),
        catchError(this.handleError<any>('updateTeam'))
      );
  }

  addTeam(newTeam: Team): Observable<Team> {
    return this.http.post<Team>(this.teamsUrl, newTeam, httpOptions).pipe(
        tap((team: Team) => this.log(`added Team w/ id=${team.id}`)),
        catchError(this.handleError<Team>('addTeam'))
      );
  }

  deleteTeam(team: Team | number): Observable<Team> {
    const id = typeof team === 'number' ? team : team.id;
    const url = `${this.teamsUrl}/${id}`;

    return this.http.delete<Team>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted Team id=${id}`)),
        catchError(this.handleError<Team>('deteleTeam')));
  }
}
