import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-app-log-match',
  templateUrl: './app-log-match.component.html',
  styleUrls: ['./app-log-match.component.scss']
})
export class AppLogMatchComponent implements OnInit {
  public players: FirebaseListObservable<any[]>;

  constructor(public database: AngularFireDatabase) {
    this.players = database.list('/Users');
  }

  ngOnInit() {
  }

}
