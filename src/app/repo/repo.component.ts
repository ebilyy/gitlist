import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  public owner: string;
  public name: string;
  public repo: string;
  public branches: any;
  public commits: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      // console.log(data);
      this.owner = data.owner;
      this.repo = data.repo;
      this.name = data.name
      this.dataService.getBranches(this.owner, this.repo).subscribe(branches=>{
        this.branches = branches;
      })
      this.dataService.getCommits(this.owner, this.repo).subscribe(commits=>{
        this.commits = commits;
      })
    })
  }

}
