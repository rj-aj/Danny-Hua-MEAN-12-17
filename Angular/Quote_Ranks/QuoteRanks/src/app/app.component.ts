import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote: Quote = new Quote();
  quotes: Array<Quote> = [];

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log("quote added", this.quote);
    this.quotes.push(this.quote);

    console.log(this.quotes);
    this.quote = new Quote();
  }

  deleteQuote(quote) {
    const i = this.quotes.indexOf(quote);
    this.quotes.splice(i, 1);
  }
}
