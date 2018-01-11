import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonsPos = [false, false, true, false, false, true, false, false];

  switch(idx) {
    this.buttonsPos[idx] = !this.buttonsPos[idx];
  }
}
