import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl: string = `https://api.github.com`;
  constructor( 
    private http: HttpClient
  ) { }
  public getAll() {
    return this.http.get(`${this.baseUrl}/users`);
  }
  public getUser(userName:string){
    return this.http.get(`${this.baseUrl}/users/${userName}`)
  }
  public getListRepos(userId:number){
    return this.http.get(`${this.baseUrl}/users/${userId}/repos`)
  }
  public getBranches(id:string, repo:string){
    // console.log(id, repo, `${this.baseUrl}/repos/${id}/${repo}/branches`);
    return this.http.get(`${this.baseUrl}/repos/${id}/${repo}/branches`)
    
  }
  public getCommits(id:string, repo:string){
    console.log(id, repo, `${this.baseUrl}/repos/${id}/${repo}/branches`);
    return this.http.get(`${this.baseUrl}/repos/${id}/${repo}/commits`)
  }

}
