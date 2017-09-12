import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from '../my-material/my-material.module';
import { PlayerComponentComponent } from './player-component/player-component.component';
import {MdSnackBarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
    MdSnackBarModule
  ],
  declarations: [
    PlayerComponentComponent
  ],
  exports: [
    PlayerComponentComponent
  ]
})
export class PlayerModule { }
