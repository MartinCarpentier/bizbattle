import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLatestMatchesComponent } from './app-latest-matches/app-latest-matches.component';
import { MyMaterialModule } from '../my-material/my-material.module';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  declarations: [
    AppLatestMatchesComponent
  ],
  exports: [
    AppLatestMatchesComponent
  ]
})
export class LatestMatchesModule { }
