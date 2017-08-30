import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponentComponent } from './player/player-component/player-component.component';
import { AppLogMatchComponent } from './log-match/app-log-match/app-log-match.component';
import { AppTop3PlayersComponent} from "./top3-players/app-top3-players/app-top3-players.component";

const routes: Routes = [
  {path: '', component: AppLogMatchComponent},
  {path: 'player', component: PlayerComponentComponent},
  {path: 'log-match', component: AppLogMatchComponent},
  {path: 'top3players', component: AppTop3PlayersComponent},
  {path: '**', component: PlayerComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
