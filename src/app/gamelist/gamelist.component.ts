import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-root',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class Gamelist implements OnInit {
  title = 'app';
  games: Gamelist[];
  
   constructor(private router: Router, private gamesService: GamesService) {
  
   }
  
   ngOnInit() {
     this.gamesService.getBikes().then(games => this.games = games);
   }
}
