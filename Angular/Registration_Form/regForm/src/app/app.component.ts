import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reg } from './registration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reg: Reg = new Reg();
  regs: Array<Reg> = [];
  registration = {};

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('submitted form', this.reg);
    this.registration = this.reg;
    console.log(this.registration);
    // this.regs.push(this.reg);
    // console.log(this.regs);
    // console.log(this.reg);
    this.reg = new Reg();
    form.resetForm;
  }
}
