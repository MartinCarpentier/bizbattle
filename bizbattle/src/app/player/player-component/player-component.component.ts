import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.scss']
})
export class PlayerComponentComponent implements OnInit {
  public players: FirebaseListObservable<any[]>;

  constructor(public database: AngularFireDatabase) {
    this.players = database.list('/Users',  {
      query: {
        orderByChild: "EloOrder"
      }
    });
  }

  ngOnInit() {
  }

}
