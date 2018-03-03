import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { USERS } from './users'
import { userData } from './userData'

@Injectable()
export class SignInService {


  constructor() { }

  signIn(user: userData): Observable<userData> {
    return of (USERS.find(rUser => user.username === rUser.username))

  }

}
