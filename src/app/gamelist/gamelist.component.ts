import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../_services/games.service';
import { User } from '../_models/index';

@Component({
  selector: 'app-root',
  templateUrl: './gamelist.component.html'
})
export class Gamelist implements OnInit {
  title = 'gameList';
  games: Gamelist[];
  user = JSON.parse(localStorage.getItem('currentUser')) as User;
   
   constructor(private router: Router, private gamesService: GamesService) {
  
   } 
  
   ngOnInit() {
     this.gamesService.getGames().then(games => this.games = games);
   }

   join(value: any) {
    this.router.navigate(['/join']);
   }
}
