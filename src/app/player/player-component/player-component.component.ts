import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AppNewPlayerComponent} from '../../dialogs/app-new-player/app-new-player.component';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.scss']
})
export class PlayerComponentComponent implements OnInit {
  public players: FirebaseListObservable<any[]>;
  public theDialog: MdDialog;

  constructor(public database: AngularFireDatabase, public dialog: MdDialog) {
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
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

  private createNewPlayer(playerName: string) {
    this.players.push({Name: playerName, Elo: 1200, HighestElo: 1200, EloOrder: -1200});
    alert('Player ' + playerName + ' has been added to the database.');
  }
}
