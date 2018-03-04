import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { USERS } from './users';
import { userData } from './userData';



@Injectable()
export class SignInService {

  private usersUrl = 'api/users';  // URL to web api

  fetchedUser: userData;

  constructor(private http: HttpClient , private messageService: MessageService) { }

  /*
  signIn(user: userData): Observable<userData> {
    return of (USERS.find(rUser => rUser.username === user.username));
  }
  */

  signIn(user: userData): Observable<userData> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.get<userData>(url).pipe(tap(_ => this.log(`fetched user id=${user.id}`)),
    catchError(this.handleError<userData>(`getUser id=${user.id}`))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add('UserService: ' + message);
}

  /*
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  */

}
