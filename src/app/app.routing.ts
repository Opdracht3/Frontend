import { Routes, RouterModule } from '@angular/router';
import { NgModule }      from '@angular/core';

import { LoginComponent } from './login/index';
import { Gamelist } from './gamelist/gamelist.component';
import { CreateGame } from './creategame/creategame.component';
import { RegisterComponent } from './register/register.component';
import { Game } from './game/game.component';

const appRoutes: Routes = 
[ { path: 'games', component: Gamelist }, 
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateGame },
  { path: 'register', component: RegisterComponent },
  { path: 'join', component: Game },
  // otherwise redirect to home
  { path: '',   redirectTo: '/games', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
]; 

@NgModule({
  imports: [
    RouterModule.forRoot( 
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}