import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { Gamelist } from '../gamelist/gamelist.component';
 
const routes: Routes = [
  { path: 'games', component: Gamelist }
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