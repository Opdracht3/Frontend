import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NGXLogger } from 'ngx-logger';
import { User } from '../_models/user';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http,
        private logger: NGXLogger) { }

    login(username: string, password: string) {
        return this.http.post('/authenticate', new User(username, password))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                this.logger.debug('Succes creating user checking response from backend ' + user)
                if (user && user.token) {
                    this.logger.debug('Adding user as current user ' + user.token)
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
