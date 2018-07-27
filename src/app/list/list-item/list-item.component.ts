import { Component, Input} from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent  {
  @Input() user: any;
  constructor( private router: Router) { }

  showUser(){
    this.router.navigate([`/user/${this.user.login}`]);
  }

}
