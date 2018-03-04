import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { USERS } from './users'
import { userData } from './userData'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AdminService {
  private usersUrl = 'api/users';  // URL to web api


  constructor(private http: HttpClient ,private messageService: MessageService) { }
  addUser (user: userData): Observable<userData> {
  return this.http.post<userData>(this.usersUrl, user, httpOptions).pipe(
    tap((user: userData) => this.log(`added user w/ id=${user.id}`)),
    catchError(this.handleError<userData>('adduser'))
  );
}

/** PUT: update the hero on the server */
updateUser (user: userData): Observable<any> {
  return this.http.put(this.usersUrl, user, httpOptions).pipe(
    tap(_ => this.log(`updated user id=${user.id}`)),
    catchError(this.handleError<any>('updateUser'))
  );
}

/** DELETE: delete the hero from the server */
deleteHero (user: userData | number): Observable<userData> {
  const id = typeof user === 'number' ? user : user.id;
  const url = `${this.usersUrl}/${id}`;

  return this.http.delete<userData>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted user id=${id}`)),
    catchError(this.handleError<userData>('deleteUser'))
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

}
