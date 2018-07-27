import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { ListItemComponent } from './list/list-item/list-item.component';

const routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'repo/:owner/:repo',
    component: RepoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RepoComponent,
    UserComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
