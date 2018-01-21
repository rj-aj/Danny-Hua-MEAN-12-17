import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  gold: number = 0;
  log: Array<string> = [];

  constructor() { }

  retrieveGold() {
    return this.gold;
  }

  retrieveLog() {
    return this.log;
  }

  processGold(max: number, min: number, place: string) {
    const goldProduce = Math.floor(Math.random()*(max-min+1)+min);
    console.log("gold earn: ", goldProduce);

    if (goldProduce > 0) {
      this.gold += goldProduce;
      this.log.push("You won " + goldProduce + " at the " + place + ".");
    } else {
      this.gold += goldProduce;
      this.log.push("You lose " + goldProduce + " at the " + place + ".");
    }

    console.log("Gold accumulated: ", this.gold)
  }
}
