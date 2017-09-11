import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyMaterialModule} from '../my-material/my-material.module';
import {AppLogMatchComponent} from './app-log-match/app-log-match.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  declarations: [
    AppLogMatchComponent
  ],
  exports: [
    AppLogMatchComponent
  ]
})
export class LogMatchModule { }
