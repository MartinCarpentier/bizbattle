import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from '../my-material/my-material.module';
import { PlayerComponentComponent } from './player-component/player-component.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  declarations: [
    PlayerComponentComponent
  ],
  exports: [
    PlayerComponentComponent
  ]
})
export class PlayerModule { }
