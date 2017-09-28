import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './game.component.html'
})
export class Game implements OnInit{
  title = 'gameList';  
  game: Game; 
  loading = false;

  constructor(private router: Router, private gamesService: GamesService) {
 
  }  

  ngOnInit(): void {    
    this.gamesService.joinGame("Game1").then(game => this.game = game);
     this.loading = true;
  }
    
}
