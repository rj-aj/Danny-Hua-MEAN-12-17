import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() messages: Array<string>;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.messages = this._dataService.retrieveLog();
  }

}
