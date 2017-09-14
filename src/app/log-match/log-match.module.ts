import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyMaterialModule} from '../my-material/my-material.module';
import {AppLogMatchComponent} from './app-log-match/app-log-match.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
