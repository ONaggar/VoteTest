import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { USERS } from './users';
import { userData } from './userData';
import { subjects } from './subjects';
import { subjectData } from './subjectData';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SubjectsService {

  private subjectsUrl = 'api/subjects';  // URL to web api

  fetchedUser: userData;

  constructor(private http: HttpClient , private messageService: MessageService) { }


  getSubjects (): Observable<subjectData[]> {
    return this.http.get<subjectData[]>(this.subjectsUrl)
      .pipe(
        tap(subjects => this.log(`fetched subjects`)),
        catchError(this.handleError('getSubjects', []))
      );
  }

  getSubject(id: string): Observable<subjectData> {
    const url = `${this.subjectsUrl}/${id}`;
    return this.http.get<subjectData>(url).pipe(
      tap(_ => this.log(`fetched subject id=${id}`)),
      catchError(this.handleError<subjectData>(`getSubject id=${id}`))
    );
  }

 /* addSubject (subject: subjectData): Observable<subjectData> {
    return this.http.post<subjectData>(this.subjectsUrl, subject, httpOptions).pipe(
      tap((subject: subjectData) => this.log(`added subject w/ id=${subject.id}`)),
      catchError(this.handleError<subjectData>('addSubject'))
    );
  }

  /** DELETE: delete the hero from the server */
  /*deleteSubject (subject: subjectData | string): Observable<subjectData> {
    const id = typeof subject === 'string' ? subject : subject.id;
    const url = `${this.subjectsUrl}/${id}`;

    return this.http.delete<subjectData>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted subject id=${id}`)),
      catchError(this.handleError<subjectData>('deleteSubject'))
    );
  }*/

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
