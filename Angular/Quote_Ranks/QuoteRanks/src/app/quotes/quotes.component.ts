import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quotes;
  @Output() deleteEvent = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  voteUp(quote) {
    quote.rating++;
  }

  voteDown(quote) {
    quote.rating--;
  }

  delete(quote) {
    this.deleteEvent.emit(quote);
  }

}
