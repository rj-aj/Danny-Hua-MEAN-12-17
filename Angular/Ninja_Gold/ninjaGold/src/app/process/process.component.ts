import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  @Output()
  updateGold = new EventEmitter;
  @Output()
  updateLog = new EventEmitter;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  earn(max, min, place) {
    this._dataService.processGold(max, min, place);
    this.updateGold.emit();
    this.updateLog.emit();
  }
}
