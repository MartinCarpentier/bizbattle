import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdToolbarModule,
  MdCardModule,
  MdDialogModule,
  MdRadioModule,
  MdListModule,
  MdSelectModule,
  MdAutocompleteModule,
  MdInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MdSelectModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    BrowserAnimationsModule,
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
    BrowserAnimationsModule,
    MdToolbarModule,
    MdInputModule,
    MdSelectModule,
    MdCardModule,
    MdRadioModule,
    MdListModule,
    MdDialogModule,
  ],
  declarations: []
})
export class MyMaterialModule {
}
