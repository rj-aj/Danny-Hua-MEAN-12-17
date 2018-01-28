import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather;
  temp: number;
  maxTemp: number;
  minTemp: number;
  humidity: number;
  clouds: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.weather = this._dataService.getForcast('burbank')
      .then(weather => {
        console.log(weather);
        this.temp = Math.floor(weather.main.temp * (9/5) - 459.67);
        this.maxTemp = Math.floor(weather.main.temp_max * (9/5) - 459.67);
        this.minTemp = Math.floor(weather.main.temp_min * (9/5) - 459.67);
        this.humidity = weather.main.humidity;
        this.clouds = weather.weather[0].description;
      });
    };
}
