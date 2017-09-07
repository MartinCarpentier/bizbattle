import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from '../my-material/my-material.module';
import { AppTop3PlayersComponent } from './app-top3-players/app-top3-players.component';
import {ReversePipe} from "./app-top3-players/reverse.pipe";

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  declarations: [
    AppTop3PlayersComponent,
    ReversePipe
  ],
  exports: [
    AppTop3PlayersComponent
  ]
})
export class Top3PlayersModule { }
