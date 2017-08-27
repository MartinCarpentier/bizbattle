import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdToolbarModule,
  MdCardModule,
  MdRadioModule,
  MdListModule,
  MdDialogModule,
  MdAutocompleteModule,
  MdInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdCardModule,
    MdRadioModule,
    MdListModule,
    MdDialogModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    MdRadioModule,
    MdListModule,
    MdDialogModule,
  ],
  declarations: []
})
export class MyMaterialModule {
}
