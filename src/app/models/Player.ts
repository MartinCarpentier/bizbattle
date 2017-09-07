import {FirebaseOperation} from "angularfire2/database";

export interface Player {
  $key: FirebaseOperation,
  Elo: number,
  Name: string,
  HighestElo: number,
  LowestElo: number,
  Avatar: string
}
