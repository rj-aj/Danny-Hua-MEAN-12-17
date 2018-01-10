import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colors = [];

  colorFill() {
    for(let i = 0; i < 10; i++) {
      const randomNum = (Math.floor(Math.random() * 6)) + 1;
      if(randomNum === 1) {
        this.colors.push('Aqua');
      } else if (randomNum === 2) {
        this.colors.push('Aquamarine');
      } else if (randomNum === 3) {
        this.colors.push('Brown');
      } else if (randomNum === 4) {
        this.colors.push('Blue');
      } else if (randomNum === 5) {
        this.colors.push('Coral');
      } else if (randomNum === 6) {
        this.colors.push('CornflowerBlue');
      }
    }
  }

  ngOnInit() {
    this.colorFill();
  }
}
