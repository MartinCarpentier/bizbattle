import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.scss']
})
export class PlayerComponentComponent implements OnInit {
  public players: FirebaseListObservable<any[]>;

  constructor(public database: AngularFireDatabase) {
    this.players = database.list('/Users', {
      query: {
        orderByChild: "EloOrder"
      }
    });
  }

  ngOnInit() {
  }

  openNewPlayerDialog() {
    let playerName = prompt("New player name");

    this.createNewPlayer(playerName);
  }

  private createNewPlayer(playerName: string) {
    this.players.push({Name: playerName, Elo: 1200, HighestElo: 1200});
    alert("Player '" + playerName + "' has been added to the database.");
  }
}
