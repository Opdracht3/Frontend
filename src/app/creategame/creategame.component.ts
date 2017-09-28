import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './createGame.component.html'
})
export class CreateGame implements OnInit {
  title = 'createGame';
  game: CreateGame;
  
   constructor(private router: Router, private gamesService: GamesService) {
  
   }
  
   ngOnInit() {
     this.gamesService.createGame("test").then(game => this.game = game);
   }
}
