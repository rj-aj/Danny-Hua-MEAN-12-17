import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GoldComponent } from './gold/gold.component';
import { ProcessComponent } from './process/process.component';
import { DisplayComponent } from './display/display.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    GoldComponent,
    ProcessComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
