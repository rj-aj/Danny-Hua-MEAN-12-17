import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http';
import { GithubUser } from './githubUser';

import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {

  constructor(private http: Http) { }

  getGithubUser(name: string): Observable<GithubUser> {
    return this.http.get(`https://api.github.com/users/${ name }`)
    .map(response => response.json());
  }

}
