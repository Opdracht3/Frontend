import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

// used to create fake backend
import { GamesService, AlertService, AuthenticationService, UserService } from './_services/index';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/index';
import { GamelistComponent } from './gamelist/gamelist.component';
import { CreateGame } from './creategame/creategame.component';
import { Game } from './game/game.component';


import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { HomeComponent } from './home/index';
import { RegisterComponent } from './register/index';

/* Routing Module */
import { AppRoutingModule } from './app.routing';
import { LoggerModule, LoggerConfig, NgxLoggerLevel } from 'ngx-logger';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.DEBUG} as LoggerConfig)
  ],
  declarations: [
    LoginComponent,
    GamelistComponent,
    Game,
    CreateGame,
    AppComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent
  ],
  providers: [
    GamesService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
