import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Gamelist } from './gamelist/gamelist.component';
import { GamesService } from './games.service';

@NgModule({
  declarations: [
    Gamelist
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [Gamelist],
  providers: [GamesService],
})
export class AppModule { }
