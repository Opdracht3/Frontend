import { Injectable } from '@angular/core';
 
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
import { Gamelist } from './gamelist/gamelist.component';
import { CreateGame } from './creategame/creategame.component';

 
 
@Injectable()
 
export class GamesService {
 
  constructor(private http: Http) {
 
  }
 
  
  private bikesUrl = '/api/games';
  private createUrl = '/api/create/';
 
  getBikes(): Promise<Gamelist[]> {
    return this.http.get(this.bikesUrl)
      .toPromise()
      .then(response => response.json() as Gamelist[])
      .catch(this.handleError);
  }

  createGame(gameName): Promise<CreateGame> {
    return this.http.get(this.createUrl + gameName)
      .toPromise()
      .then(response => response.json() as CreateGame)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}