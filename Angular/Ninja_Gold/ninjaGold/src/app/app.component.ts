import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold: number = 0;
  dataLogs: Array<string>;

  constructor(private _dataService: DataService) { }

  totalGold() {
    this.gold = this._dataService.retrieveGold();
  }

  getMessages() {
    this.dataLogs = this._dataService.retrieveLog();
  }
}
