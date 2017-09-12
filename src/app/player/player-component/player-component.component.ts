import {Component, OnInit} from '@angular/core';
import {AppNewPlayerComponent} from '../../dialogs/app-new-player/app-new-player.component';
import {MdDialog, MdSnackBar} from '@angular/material';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Player} from "../../models/Player";

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.scss']
})
export class PlayerComponentComponent implements OnInit {
  public players: FirebaseListObservable<any[]>;
  public theDialog: MdDialog;

  constructor(public database: AngularFireDatabase, public dialog: MdDialog, public snackBar: MdSnackBar) {
    this.theDialog = dialog;
    this.players = database.list('/Users', {
      query: {
        orderByChild: 'EloOrder'
      }
    });
  }

  ngOnInit() {
  }

  openNewPlayerDialog() {
    const dialogRef = this.theDialog.open(AppNewPlayerComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.createNewPlayer(result.Name, result.Avatar)
    });
  }

  private createNewPlayer(playerName: string, playerAvatar: string) {
    this.players.push({Name: playerName, Elo: 1200, HighestElo: 1200, EloOrder: -1200, Avatar: playerAvatar});
    this.snackBar.open("Player " + playerName + " has been added to the database.");
  }

  deletePlayer(player: Player) {
    let deleteConfirmed: boolean = confirm("Are you sure you want to delete the user '" + player.Name + "' ?");

    if (deleteConfirmed) {
      this.players.remove(player.$key);
    }
  }
}
