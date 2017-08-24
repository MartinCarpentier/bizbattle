import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponentComponent } from './player/player-component/player-component.component';
import { AppLogMatchComponent } from './log-match/app-log-match/app-log-match.component';

const routes: Routes = [
  {path: '', component: PlayerComponentComponent},
  {path: 'player', component: PlayerComponentComponent},
  {path: 'log-match', component: AppLogMatchComponent},
  {path: '**', component: PlayerComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
