import { Routes, RouterModule } from '@angular/router';
import { NgModule }      from '@angular/core';

import { LoginComponent } from './login/index';
import { Gamelist } from './gamelist/gamelist.component';
import { CreateGame } from './creategame/creategame.component';
import { RegisterComponent } from './register/register.component';
import { Game } from './game/game.component';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = 
[ { path: 'games', component: Gamelist , canActivate: [AuthGuard] }, 
  { path: 'login', component: LoginComponent},
  { path: 'create', component: CreateGame , canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent},
  { path: 'join', component: Game },
  // otherwise redirect to home
  { path: '',   redirectTo: 'login', pathMatch: 'full' , canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
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