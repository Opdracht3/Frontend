﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class UserService {
    constructor(private http: Http,
        private logger: NGXLogger) { }

    getAll() {
        return this.http.get('/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        this.logger.debug('Register user : ' + user)
        return this.http.post('/register', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
