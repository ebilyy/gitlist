import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private dataService: DataService) { }
  public users: any;
  ngOnInit() {
    this.dataService.getAll().subscribe((data)=>{this.users = data
    // console.log(this.users)
    });
  }

}
