import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CompareValidatorModule} from 'angular-compare-validator';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CompareValidatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
