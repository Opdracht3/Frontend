import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Gamelist } from './gamelist/gamelist.component';
import { CreateGame } from './creategame/creategame.component';
import { GamesService } from './games.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    Gamelist,
    CreateGame
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [Gamelist],
  providers: [GamesService],
})
export class AppModule { }
