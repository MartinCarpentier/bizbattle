import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyMaterialModule } from "./my-material/my-material.module";
import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';

import { PlayerModule } from './player/player.module';
import { LogMatchModule } from './log-match/log-match.module';
import { Top3PlayersModule} from "./top3-players/top3-players.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    AppRoutingModule,
    PlayerModule,
    LogMatchModule,
    Top3PlayersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
