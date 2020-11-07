import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubApi {
  readonly apiUrl = 'https://api.github.com/';
  constructor(
    private http: HttpClient
  ) {}

  getRepos(searchQuery?: string): Observable<any> {
      return this.http.get(`${this.apiUrl}search/repositories${searchQuery ? `?q=${searchQuery}` : ''}`);
  }
}
