import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Player} from "../../models/Player";

@Component({
  selector: 'app-app-new-player',
  templateUrl: `./app-new-player.component.html`,
  styleUrls: ['./app-new-player.component.scss']
})
export class AppNewPlayerComponent {

  public avatar: string
  
  constructor(public dialogRef: MdDialogRef<AppNewPlayerComponent>) {
  }

  closeDialog() {
    this.dialogRef.close(undefined);
  }

  saveDialog(playerName: string, playerAvatar: string ) {
    var input: Player = {
      $key: this.generateUuidv4(),
      Elo: 1200,
      Name: playerName,
      HighestElo: 1200,
      LowestElo: 1200,
      Avatar: playerAvatar
    }

    this.dialogRef.close(input);
  }

  generateUuidv4(): string {
    return (''+[1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, ch => {
        let c = Number(ch);
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      }
    )
  }
}
