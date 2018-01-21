import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
  @Input() goldCount;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.goldCount = this._dataService.retrieveGold();
  }

}
