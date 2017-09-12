import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Player} from "../../models/Player";

@Component({
  selector: 'app-app-log-match',
  templateUrl: './app-log-match.component.html',
  styleUrls: ['./app-log-match.component.scss']
})
export class AppLogMatchComponent implements OnInit {
  public players: FirebaseListObservable<any[]>;
  selectedWinner: string = 'NaN';
  selectedPlayer1: Player;
  selectedPlayer2: Player;
  logMatchStatus: string = "Nothing logged yet";

  matchWinners = [
    'Player 1',
    'Player 2'
  ];

  constructor(public database: AngularFireDatabase) {
    this.players = database.list('/Users');
  }

  ngOnInit() {
  }

  selectedPlayerWon(winner: string)
  {
    this.selectedWinner = winner;
  }

  logMatch() {

    if(this.selectedPlayer1.Name == this.selectedPlayer2.Name &&
      this.selectedPlayer1.Elo == this.selectedPlayer2.Elo)
    {
      this.logMatchStatus = "You can't select the same player for both players"
      return;
    }

    if(this.selectedWinner == 'NaN')
    {
      this.logMatchStatus = "You need to select a winner"
      return;
    }

    // Elo variables
    var kValue = 100;

    // Calculate the transformed rating
    var rPlayer1 = Math.pow(10, this.selectedPlayer1.Elo/400);
    var rPlayer2 = Math.pow(10, this.selectedPlayer2.Elo/400);

    // Calculate expected score
    var ePlayer1 = rPlayer1/(rPlayer1+rPlayer2);
    var ePlayer2 = rPlayer2/(rPlayer1+rPlayer2);

    // Set winner
    var sOne = this.selectedWinner == 'Player 1' ? 1 : 0;
    var sTwo = this.selectedWinner == 'Player 2' ? 1 : 0;

    //Updated elo rating for each player - r(1) + K * (S(1) – E(1))
    let updatedEloPlayer1: number = this.selectedPlayer1.Elo + kValue * (sOne - ePlayer1);
    let updatedEloPlayer2: number = this.selectedPlayer2.Elo + kValue * (sTwo - ePlayer2);

    this.logMatchStatus = "Match logged successfully";

    this.selectedPlayer1.Elo = updatedEloPlayer1;
    this.selectedPlayer2.Elo = updatedEloPlayer2;

    var player1HighestElo = this.selectedPlayer1.HighestElo < updatedEloPlayer1 ? Math.round(updatedEloPlayer1) :
                                                              this.selectedPlayer1.HighestElo;
    var player2HighestElo = this.selectedPlayer2.HighestElo < updatedEloPlayer2 ? Math.round(updatedEloPlayer2) :
                                                              this.selectedPlayer2.HighestElo;

    this.players.update(this.selectedPlayer1.$key, { Elo: Math.round(updatedEloPlayer1),
                                                           HighestElo: player1HighestElo,
                                                           EloOrder: -Math.round(updatedEloPlayer1)});
    this.players.update(this.selectedPlayer2.$key, { Elo: Math.round(updatedEloPlayer2),
                                                           HighestElo: player2HighestElo,
                                                           EloOrder: -Math.round(updatedEloPlayer2) });
  }
}
