import { Component, OnInit } from '@angular/core';

declare var System: any
@Component({
  selector: 'app-app-top3-players',
  templateUrl: './app-top3-players.component.html',
  styleUrls: ['./app-top3-players.component.scss']
})
export class AppTop3PlayersComponent implements OnInit {
  public GOLDMEDAL;
  public SILVERMEDAL;
  public BRONZEMEDAL;

  constructor( ) {

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

}
