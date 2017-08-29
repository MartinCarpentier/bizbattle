import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from '../my-material/my-material.module';
import { FormsModule } from '@angular/forms';
import {AppLogMatchComponent} from './app-log-match/app-log-match.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
    FormsModule
  ],
  declarations: [
    AppLogMatchComponent
  ],
  exports: [
    AppLogMatchComponent
  ]
})
export class LogMatchModule { }
