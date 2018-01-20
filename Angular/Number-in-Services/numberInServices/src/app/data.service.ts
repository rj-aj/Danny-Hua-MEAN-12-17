import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  alphaNumbers: number[] = [];
  betaNumbers: number[] = [];
  diffNumbers: number[] = [];

  constructor() { }

  retrieveAlphaNum() {
    return this.alphaNumbers;
  }

  retrieveBetaNum() {
    return this.betaNumbers;
  }

  retrieveDiffNum() {
    return this.diffNumbers;
  }

  randomNumber(component: string) {
    const randomNum = Math.floor(Math.random() * 10) + 1;

    if (component === 'alpha') {
      this.alphaNumbers.push(randomNum);
    } else if (component === 'beta') {
      this.betaNumbers.push(randomNum);
    }

    console.log(randomNum);

    return randomNum;
  }

  difference() {
    let alphaSum = this.alphaNumbers.reduce((a, b) => a + b, 0);
    let betaSum = this.betaNumbers.reduce((a, b) => a + b, 0);

    const diffNum = alphaSum - betaSum;

    this.diffNumbers.push(diffNum);
  }

}
