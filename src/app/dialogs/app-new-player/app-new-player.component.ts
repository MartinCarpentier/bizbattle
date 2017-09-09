import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Player} from "../../models/Player";

@Component({
  selector: 'app-app-new-player',
  templateUrl: `./app-new-player.component.html`,
  styleUrls: ['./app-new-player.component.scss']
})
export class AppNewPlayerComponent {

  public AVATARIMAGE;
  public name: string
  public avatar: string
  
  constructor(public dialogRef: MdDialogRef<AppNewPlayerComponent>) {
    this.AVATARIMAGE = "";
  }

  closeDialog() {
    this.dialogRef.close(undefined);
  }

  saveDialog() {

    var input: Player = {
      $key: "qwsdasdqwr",
      Elo: 1200,
      Name: this.name,
      HighestElo: 1200,
      LowestElo: 1200,
      Avatar: this.avatar
    }

    this.dialogRef.close(input);
  }
}
