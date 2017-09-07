import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyMaterialModule} from "./my-material/my-material.module";
import {AppRoutingModule} from './app-routing.module';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import 'hammerjs';

import {PlayerModule} from './player/player.module';
import {LogMatchModule} from './log-match/log-match.module';
import {Top3PlayersModule} from "./top3-players/top3-players.module";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    PlayerModule,
    LogMatchModule,
    Top3PlayersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
