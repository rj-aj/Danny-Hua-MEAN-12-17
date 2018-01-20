import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.retrieveBetaNum();
  }

  generate(component) {
    this._dataService.randomNumber(component);
  }

}
