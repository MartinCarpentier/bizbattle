import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import "rxjs/add/operator/map";


declare var System: any
declare var Elo: any

@Component({
  selector: 'app-app-top3-players',
  template: `<md-card style="font-family: 'Maven Pro', sans-serif;" >
    <md-card-title-group>
      <md-card-title style="font-family: 'Maven Pro', sans-serif;">Top 3 players</md-card-title>
    </md-card-title-group>
    <md-card-content >
      <p> The current top 3 players of table tennis!</p>
      <div *ngFor="let item of items | async; let i = index" [attr.data-index]="i" 
           [style.margin-top]="getTopMargin(i)"
           [style.margin-bottom]="getBottomMargin(i)">
        <p>
          <img *ngIf="i == 0" style="float: left" [src]="GOLDMEDAL"  width="64" height="64"/>
          <img *ngIf="i == 1" style="float: left" [src]="SILVERMEDAL"  width="64" height="64"/>
          <img *ngIf="i == 2" style="float: left" [src]="BRONZEMEDAL"  width="64" height="64"/>
          <b>{{ item.Name }}</b>
          <br> 
        <span>{{ item.Elo }}</span>
        </p>
      </div>
    </md-card-content>
  </md-card>
  `,
  //templateUrl: './app-top3-players.component.html',
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
      return ""
    }
    else
    {
      return "3em";
    }
  }

  public getBottomMargin(index :number) {
    if(index == 2)
    {
      return "2em"
    }
    else
    {
      return "";
    }
  }
}
