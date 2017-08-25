import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-top3-players',
  templateUrl: './app-top3-players.component.html',
  styleUrls: ['./app-top3-players.component.scss']
})
export class AppTop3PlayersComponent implements OnInit {
  public GOLDMEDAL = require("../medal-images/gold-medal.png");
  public SILVERMEDAL = require("../medal-images/silver-medal.png");
  public BRONZEMEDAL = require("../medal-images/bronze-medal.png");

  constructor() { }

  ngOnInit() {
  }

}
