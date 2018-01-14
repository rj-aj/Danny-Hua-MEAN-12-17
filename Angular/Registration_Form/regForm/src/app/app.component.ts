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
  // pwError: string = '';

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('submitted form', this.reg);
    this.regs.push(this.reg);
    console.log(this.regs);
    this.reg = new Reg();
    form.reset;
    // if(this.reg.confirmPassword === this.reg.password) {
    //   this.regs.push(this.reg);
    //   form.reset();
    // } else {
    //   this.pwError = "confirm password does not match";
    //   form.reset();
    // }
  }
}
