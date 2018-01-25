import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { GitHubService } from './git-hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exist: boolean = false;
  score: number = 0;
  username: string = '';
  errorMessage: string;

  constructor(private githubService: GitHubService) {}

  calculate(form: NgForm) {
   this.username = form.value.username;

   this.githubService.getGithubUser(this.username).subscribe(
    user => {
      this.exist = true;
      this.score = user.public_repos + user.followers;
      form.reset();
    }, (response: Response) => this.errorMessage = "does not exist"
   );
  }

}
