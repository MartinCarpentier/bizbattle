import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-app-new-player',
  templateUrl: `./app-new-player.component.html`,
  styleUrls: ['./app-new-player.component.scss']
})
export class AppNewPlayerComponent {

  constructor(public dialogRef: MdDialogRef<AppNewPlayerComponent>) {

  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
