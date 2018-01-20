import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { DiffComponent } from './diff/diff.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    DiffComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
