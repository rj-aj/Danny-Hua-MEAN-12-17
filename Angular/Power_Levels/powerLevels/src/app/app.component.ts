import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Power } from './power';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  power: Power = new Power();
  human: number = 0;
  saiyan: number = 0;
  supersaiyan: number = 0;
  supersaiyantwo: number = 0;
  supersaiyanthree: number = 0;
  supersaiyanfour: number = 0;

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault;

    this.human = this.power.powerLvl;
    this.saiyan = this.power.powerLvl * 10;
    this.supersaiyan = this.power.powerLvl * 90;
    this.supersaiyantwo = this.power.powerLvl * 150;
    this.supersaiyanthree = this.power.powerLvl * 250;
    this.supersaiyanfour = this.power.powerLvl * 500;

    console.log("submited power lvl", this.human);
    console.log("saiyan power", this.saiyan);
    console.log("super saiyan power", this.supersaiyan);
    console.log("super saiyan two power", this.supersaiyantwo);
    console.log("super saiyan three power", this.supersaiyanthree);
    console.log("super saiyan four power", this.supersaiyanfour);
  }
}
