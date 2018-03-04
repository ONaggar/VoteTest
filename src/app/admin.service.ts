import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { USERS } from './users'
import { userData } from './userData'
import { subjectData } from './subjectData'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AdminService {
  private usersUrl = 'api/users';  // URL to web api
  private subjectsUrl = '';

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
deleteUser (user: userData | number): Observable<userData> {
  const id = typeof user === 'number' ? user : user.id;
  const url = `${this.usersUrl}/${id}`;

  return this.http.delete<userData>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted user id=${id}`)),
    catchError(this.handleError<userData>('deleteUser'))
  );
}


addSubject (subject: subjectData): Observable<subjectData> {
return this.http.post<subjectData>(this.subjectsUrl, subject, httpOptions).pipe(
  tap((subject: subjectData) => this.log(`added subject w/ id=${subject.id}`)),
  catchError(this.handleError<subjectData>('addsubject'))
);
}

deleteSubject (subject: subjectData | number): Observable<subjectData> {
  const id = typeof subject === 'number' ? subject : subject.id;
  const url = `${this.subjectsUrl}/${id}`;

  return this.http.delete<subjectData>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted subject id=${id}`)),
    catchError(this.handleError<subjectData>('deleteSubject'))
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
