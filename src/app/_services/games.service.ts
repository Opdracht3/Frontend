import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { GamelistComponent } from '../gamelist/gamelist.component';
import { CreateGame } from '../creategame/creategame.component';
import { Game } from '../game/game.component';



@Injectable()

export class GamesService {

  constructor(private http: Http) {

  }


  private gameUrl = '/games';
  private createUrl = '/create/';
  private joinUrl = '/join';

  getGames(): Promise<GamelistComponent[]> {
    return this.http.get(this.gameUrl)
      .toPromise()
      .then(response => response.json() as GamelistComponent[])
      .catch(this.handleError);
  }

  createGame(gameName): Promise<CreateGame> {
    return this.http.get(this.createUrl + gameName)
      .toPromise()
      .then(response => response.json() as CreateGame)
      .catch(this.handleError);
  }

  joinGame(gameName): Promise<Game> {
    return this.http.get('' + gameName + this.createUrl)
      .toPromise()
      .then(response => response.json() as Game)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
