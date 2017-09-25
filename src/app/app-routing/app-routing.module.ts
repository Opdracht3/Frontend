import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { Gamelist } from '../gamelist/gamelist.component';
import { CreateGame } from '../creategame/creategame.component';
 
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'games', component: Gamelist },  
  { path: 'create', component: CreateGame }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ], 
  declarations: []
})
export class AppRoutingModule { }