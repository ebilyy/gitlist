import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { DataService } from '../data.service'
import { map } from "rxjs/operators";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // public id: string;
  public user: any;
  public reposList: any;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { 
    
  }

  ngOnInit() {

    this.route.params.subscribe(data=>{
      this.dataService.getUser(data.id).subscribe(
        (user)=>{
          this.user = user;
          this.dataService.getListRepos(this.user.id).subscribe(
            repo => {
              this.reposList = repo 
              console.log(repo);
            })
        });
      
    })

  }
  public showRepo(val){
    // console.log(val);
    // this.router.navigate([`repo`, {owner: this.user.login, repo: val.name}]);
    this.router.navigateByUrl(`repo/${this.user.id}/${val.name}`);
    
  }

}
