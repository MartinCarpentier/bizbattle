import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import "rxjs/add/operator/map";


declare var System: any
declare var Elo: any

@Component({
  selector: 'app-app-top3-players',
  templateUrl: './app-top3-players.component.html',
  styleUrls: ['./app-top3-players.component.scss']
})



export class AppTop3PlayersComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  public GOLDMEDAL;
  public SILVERMEDAL;
  public BRONZEMEDAL;

  constructor(public database: AngularFireDatabase) {
    this.items = database.list('/Users',  {
      query: {
        limitToFirst: 3,
        orderByChild: "EloOrder"
      }
      });
  }

  ngOnInit() {
    System.import("../medal-images/gold-medal.png").then(file => {
      this.GOLDMEDAL = file.toString();
    });

    System.import("../medal-images/silver-medal.png").then(file => {
      this.SILVERMEDAL = file.toString();
    });

    System.import("../medal-images/bronze-medal.png").then(file => {
      this.BRONZEMEDAL = file.toString();
    });
  }

  public getTopMargin(index: number)
  {
    if(index == 0)
    {
      return "1em"
    }
    else
    {
      return "2em";
    }
  }

  public getBottomMargin(index :number) {
    if(index == 2)
    {
      return "3em"
    }
    else
    {
      return "";
    }
  }
}