import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseOperation} from "angularfire2/database";
import {Player} from "../../models/Player";

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
    let playerName: string = prompt("New player name");

    if (playerName != null) {
      if (playerName.length > 1) {
        this.createNewPlayer(playerName);
      }
      else {
        alert("Player name can't be empty");
      }
    }
  }

  private createNewPlayer(playerName: string) {
    this.players.push({Name: playerName, Elo: 1200, HighestElo: 1200});
    alert("Player '" + playerName + "' has been added to the database.");
  }

  deletePlayer(player: Player) {
    let deleteConfirmed: boolean = confirm("Are you sure you want to delete the user '" + player.Name + "' ?");

    if (deleteConfirmed) {
      this.players.remove(player.$key);
    }
  }
}
